import type { ProductWithColors } from '@/components/shared/ProductCard';

export type CatalogFilters = {
  category: string;
  sizes: string[];
  materials: string[];
  colorId: string[];
  query: string;
};

export function filterProducts(products: ProductWithColors[], filters: CatalogFilters) {
  return products.filter((product) => {
    if (filters.category && product.category !== filters.category) {
      return false;
    }

    if (filters.sizes.length > 0 && !filters.sizes.some((size) => product.sizes.includes(size))) {
      return false;
    }

    if (filters.materials.length > 0 && (!product.material || !filters.materials.includes(product.material))) {
      return false;
    }

    if (filters.colorId.length > 0 && !product.colors.some((color) => filters.colorId.includes(color.id))) {
      return false;
    }

    if (!filters.query) return true;

    return product.name.toLowerCase().includes(filters.query.toLowerCase());
  });
}
