'use client';

import { CatalogSearch } from './CatalogSearch';
import { CatalogGrid } from './CatalogGrid';
import { useCatalogFilters } from './useCatalogFilters';
import { CatalogFilters } from './CatalogFilters';
import type { ProductWithColors } from "@/components/shared/ProductCard";

type CatalogContentProps = {
  products: ProductWithColors[]
}

export function CatalogContent({ products }: CatalogContentProps) {
  const { 
    search, setSearch, isSearching, clearSearch,
    selectedCategory, selectedSizes, selectedMaterials, selectedColorId,
    allCategories, allSizes, allMaterials, allColors,
    toggleSize, toggleMaterial, toggleColor, selectCategory,
    resetFilters, filteredProducts, hasActiveFilters 
  } = useCatalogFilters(products);

  return (
    <div className="grid gap-7.5 md:grid-cols-[240px_1fr]">
      <CatalogFilters
        categories={allCategories}
        sizes={allSizes}
        materials={allMaterials}
        colors={allColors}
        selectedCategory={selectedCategory}
        selectedSizes={selectedSizes}
        selectedMaterials={selectedMaterials}
        selectedColorId={selectedColorId}
        onSelectCategory={selectCategory}
        onToggleSize={toggleSize}
        onToggleMaterial={toggleMaterial}
        onToggleColor={toggleColor}
        onReset={resetFilters}
        hasActiveFilters={hasActiveFilters}
      />
      <div className="flex flex-col gap-6">
        <CatalogSearch search={search} onSearchChange={setSearch} isSearching={isSearching} onClear={clearSearch} />
        <CatalogGrid products={filteredProducts} />
      </div>
    </div>
  );
}
