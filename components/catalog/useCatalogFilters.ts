"use client"

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { ProductWithColors } from "@/components/shared/ProductCard";
import { filterProducts } from "@/lib/catalog-filter";
import {
  getAllCategories,
  getAllColors,
  getAllMaterials,
  getAllSizes,
} from "@/lib/catalog-options";
import { buildCatalogQueryString, parseList } from "@/lib/catalog-url";

export function useCatalogFilters(products: ProductWithColors[]) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedColorId, setSelectedColorId] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') ?? '');
    setSelectedSizes(parseList(searchParams.get('sizes')));
    setSelectedMaterials(parseList(searchParams.get('materials')));
    setSelectedColorId(parseList(searchParams.get('colors')));

    const query = searchParams.get('query') ?? '';
    setSearch(query);
    setDebouncedSearch(query);
    setIsReady(true);
  }, [searchParams]);

  useEffect(() => {
    if (!isReady) return;

    const next = buildCatalogQueryString({
      category: selectedCategory,
      sizes: selectedSizes,
      materials: selectedMaterials,
      colors: selectedColorId,
      query: debouncedSearch,
    });

    const current = searchParams.toString();

    if (next !== current) {
      router.replace(next ? `/catalog?${next}` : '/catalog', { scroll: false });
    }
  }, [isReady, selectedCategory, selectedSizes, selectedMaterials, selectedColorId, debouncedSearch, router, searchParams]);

  function toggleSize(size: string) {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]));
  }

  function toggleMaterial(material: string) {
    setSelectedMaterials((prev) => (prev.includes(material) ? prev.filter((m) => m !== material) : [...prev, material]));
  }

  function toggleColor(colorId: string) {
    setSelectedColorId((prev) => (prev.includes(colorId) ? prev.filter((id) => id !== colorId) : [...prev, colorId]));
  }

  function resetFilters() {
    setSelectedCategory('');
    setSelectedSizes([]);
    setSelectedMaterials([]);
    setSelectedColorId([]);
  }

  function selectCategory(category: string) {
    setSelectedCategory((prev) => (prev === category ? '' : category));
  }

  function clearSearch() {
    setSearch("");
    setDebouncedSearch("");
  }

  const allCategories = useMemo(() => getAllCategories(products), [products]);
  const allSizes = useMemo(() => getAllSizes(products), [products]);
  const allMaterials = useMemo(() => getAllMaterials(products), [products]);
  const allColors = useMemo(() => getAllColors(products), [products]);


  const filteredProducts = useMemo(
    () =>
      filterProducts(products, {
        category: selectedCategory,
        sizes: selectedSizes,
        materials: selectedMaterials,
        colorId: selectedColorId,
        query: debouncedSearch,
      }),
    [products, selectedCategory, selectedSizes, selectedMaterials, selectedColorId, debouncedSearch],
  );

  const hasActiveFilters = selectedCategory !== '' || selectedSizes.length > 0 || selectedMaterials.length > 0 || selectedColorId.length > 0;
  const isSearching = search !== debouncedSearch;



  return {
    // search
    search,
    setSearch,
    isSearching,
    clearSearch,

    // filter values
    selectedCategory,
    selectedSizes,
    selectedMaterials,
    selectedColorId,

    // lists for sidebar
    allCategories,
    allSizes,
    allMaterials,
    allColors,

    // actions
    toggleSize,
    toggleMaterial,
    toggleColor,
    selectCategory,
    resetFilters,

    // result
    filteredProducts,
    hasActiveFilters,
  }
}