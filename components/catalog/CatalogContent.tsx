'use client';

import { ProductCard, type ProductWithColors } from '@/components/shared/ProductCard';
import { useEffect, useState, useMemo } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Loader2, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buildCatalogQueryString, parseList } from '@/lib/catalog-url';
import { useRouter, useSearchParams } from 'next/navigation';

type CatalogContentProps = {
  products: ProductWithColors[];
  // initialCategory?: string;
};

export function CatalogContent({ products }: CatalogContentProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedColorIds, setSelectedColorIds] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') ?? '');
    setSelectedSizes(parseList(searchParams.get('sizes')));
    setSelectedMaterials(parseList(searchParams.get('materials')));
    setSelectedColorIds(parseList(searchParams.get('colors')));

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
      colors: selectedColorIds,
      query: debouncedSearch,
    });

    const current = searchParams.toString();

    if (next !== current) {
      router.replace(next ? `/catalog?${next}` : '/catalog', { scroll: false });
    }
  }, [isReady, selectedCategory, selectedSizes, selectedMaterials, selectedColorIds, debouncedSearch, router, searchParams]);

  const isSearching = search !== debouncedSearch;

  const allSizes = useMemo(() => {
    const sizes = products.flatMap((product) => product.sizes);
    return [...new Set(sizes)].sort();
  }, [products]);

  function toggleSize(size: string) {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]));
  }

  const allMaterials = useMemo(() => {
    const materials = products.map((product) => product.material).filter(Boolean) as string[];
    return [...new Set(materials)].sort();
  }, [products]);

  function toggleMaterial(material: string) {
    setSelectedMaterials((prev) => (prev.includes(material) ? prev.filter((m) => m !== material) : [...prev, material]));
  }

  const allColors = useMemo(() => {
    const map = new Map<string, { id: string; name: string; hex: string }>();

    for (const product of products) {
      for (const color of product.colors) {
        map.set(color.id, color);
      }
    }

    return [...map.values()];
  }, [products]);

  function toggleColor(colorId: string) {
    setSelectedColorIds((prev) => (prev.includes(colorId) ? prev.filter((id) => id !== colorId) : [...prev, colorId]));
  }

  const allCategories = useMemo(() => {
    return [...new Set(products.map((p) => p.category))].sort();
  }, [products]);

  function resetFilters() {
    setSelectedCategory('');
    setSelectedSizes([]);
    setSelectedMaterials([]);
    setSelectedColorIds([]);
  }

  function selectCategory(category: string) {
    setSelectedCategory((prev) => (prev === category ? '' : category));
  }

  const hasActiveFilters = selectedCategory !== '' || selectedSizes.length > 0 || selectedMaterials.length > 0 || selectedColorIds.length > 0;

  const filteredProducts = products.filter((product) => {
    // filter by category
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }

    // filter by size
    if (selectedSizes.length > 0 && !selectedSizes.some((size) => product.sizes.includes(size))) {
      return false;
    }

    // filter by material
    if (selectedMaterials.length > 0 && (!product.material || !selectedMaterials.includes(product.material))) {
      return false;
    }

    // filter by color
    if (selectedColorIds.length > 0 && !product.colors.some((color) => selectedColorIds.includes(color.id))) {
      return false;
    }

    // filter by search
    if (!debouncedSearch) return true;
    return product.name.toLowerCase().includes(debouncedSearch.toLowerCase());
  });

  return (
    <div className="grid gap-7.5 md:grid-cols-[240px_1fr]">
      <aside className="flex flex-col gap-6">
        <div className="filters-container flex flex-col gap-3">
          <p className="text-sm font-semibold">Фільтри:</p>
          <div>
            <p className="mb-2 text-sm text-brown-100 uppercase">Категорія</p>
            <div className="flex flex-col gap-2">
              {allCategories.map((category) => (
                <div key={category} className="flex items-center gap-2">
                  <Checkbox id={`category-${category}`} checked={selectedCategory === category} onCheckedChange={() => selectCategory(category)} />
                  <Label htmlFor={`category-${category}`} className="text-sm font-normal">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm text-brown-100 uppercase">Розмір</p>
            <div className="flex flex-col gap-2">
              {allSizes.map((size) => (
                <div key={size} className="flex items-center gap-2">
                  <Checkbox id={`size-${size}`} checked={selectedSizes.includes(size)} onCheckedChange={() => toggleSize(size)} />
                  <Label htmlFor={`size-${size}`} className="text-sm font-normal">
                    {size}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm text-brown-100 uppercase">Матеріал</p>
            <div className="flex flex-col gap-2">
              {allMaterials.map((material) => (
                <div key={material} className="flex items-center gap-2">
                  <Checkbox id={`material-${material}`} checked={selectedMaterials.includes(material)} onCheckedChange={() => toggleMaterial(material)} />
                  <Label htmlFor={`material-${material}`} className="text-sm font-normal">
                    {material}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm text-brown-100 uppercase">Колір</p>
            <div className="flex flex-wrap gap-3 max-w-51">
              {allColors.map((color) => (
                <button key={color.id} type="button" title={color.name} onClick={() => toggleColor(color.id)} className={cn('size-6 rounded-full border-2 cursor-pointer transition-colors duration-400', selectedColorIds.includes(color.id) ? 'border-foreground' : 'border-black/10')} style={{ backgroundColor: color.hex }} />
              ))}
            </div>
          </div>
          {hasActiveFilters && (
            <Button variant="outline" onClick={resetFilters} className="mt-4 cursor-pointer">
              Скинути фільтри
            </Button>
          )}
        </div>
      </aside>
      <div className="flex flex-col gap-6">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Пошук" className="pl-9 pr-9" />

          {isSearching && <Loader2 className="absolute right-3 top-1/2 size-4 -translate-y-1/2 animate-spin text-muted-foreground" />}

          {!isSearching && search && (
            <button
              type="button"
              onClick={() => {
                setSearch('');
                setDebouncedSearch('');
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Очистити пошук"
            >
              <X className="size-4 cursor-pointer" />
            </button>
          )}
        </div>
        {filteredProducts.length === 0 ? (
          <div className="text-center">
            <p className="text-brown-100 text-2xl font-semibold">Товарів не знайдено</p>
            <p className="text-brown-100 text-sm">Спробуйте змінити параметри пошуку</p>
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fill,218px)] gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
