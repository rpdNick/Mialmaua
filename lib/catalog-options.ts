import type { ProductWithColors } from '@/components/shared/ProductCard';
import type { Color } from '@/generated/prisma/client';

export function getAllSizes(products: ProductWithColors[]): string[] {
  const sizes = products.flatMap((product) => product.sizes);
  return [...new Set(sizes)].sort();
}

export function getAllMaterials(products: ProductWithColors[]): string[] {
  const materials = products.map((product) => product.material).filter(Boolean) as string[];
  return [...new Set(materials)].sort();
}

export function getAllColors(products: ProductWithColors[]): Color[] {
  const map = new Map<string, Color>();

  for (const product of products) {
    for (const color of product.colors) {
      map.set(color.id, color);
    }
  }

  return [...map.values()];
}

export function getAllCategories(products: ProductWithColors[]): string[] {
  return [...new Set(products.map((product) => product.category))].sort();
}
