import type { Color } from '@/generated/prisma/client';
import { FilterGroup } from './FilterGroup';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type CatalogFiltersProps = {
  categories: string[];
  sizes: string[];
  materials: string[];
  colors: Color[];

  selectedCategory: string;
  selectedSizes: string[];
  selectedMaterials: string[];
  selectedColorId: string[];

  onSelectCategory: (category: string) => void;
  onToggleSize: (size: string) => void;
  onToggleMaterial: (material: string) => void;
  onToggleColor: (colorId: string) => void;
  onReset: () => void;

  hasActiveFilters: boolean;
};

export function CatalogFilters({ categories, sizes, materials, colors, selectedCategory, selectedSizes, selectedMaterials, selectedColorId, onSelectCategory, onToggleSize, onToggleMaterial, onToggleColor, onReset, hasActiveFilters }: CatalogFiltersProps) {
  return (
    <aside className="flex flex-col gap-6">
      <div className="filters-container flex flex-col gap-3">
        <p className="text-sm font-semibold">Фільтри:</p>
  
        <FilterGroup
          title="Категорія"
          items={categories}
          idPrefix="category"
          isChecked={(item) => selectedCategory === item}
          onToggle={onSelectCategory}
        />
  
        <FilterGroup
          title="Розмір"
          items={sizes}
          idPrefix="size"
          isChecked={(item) => selectedSizes.includes(item)}
          onToggle={onToggleSize}
        />
  
        <FilterGroup
          title="Матеріал"
          items={materials}
          idPrefix="material"
          isChecked={(item) => selectedMaterials.includes(item)}
          onToggle={onToggleMaterial}
        />
  
        <div>
          <p className="mb-2 text-sm text-brown-100 uppercase">Колір</p>
          <div className="flex max-w-51 flex-wrap gap-3">
            {colors.map((color) => (
              <button
                key={color.id}
                type="button"
                title={color.name}
                onClick={() => onToggleColor(color.id)}
                className={cn(
                  "size-6 cursor-pointer rounded-full border-2 transition-colors duration-400",
                  selectedColorId.includes(color.id) ? "border-foreground" : "border-black/10"
                )}
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        </div>
  
        {hasActiveFilters && (
          <Button variant="outline" onClick={onReset} className="mt-4 cursor-pointer">
            Скинути фільтри
          </Button>
        )}
      </div>
    </aside>
  )
}
