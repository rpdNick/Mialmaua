import { ProductCard, type ProductWithColors } from '@/components/shared/ProductCard';

type CatalogGridProps = {
  products: ProductWithColors[];
};

export function CatalogGrid({ products }: CatalogGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center">
        <p className="text-2xl font-semibold text-brown-100">Товарів не знайдено</p>
        <p className="text-sm text-brown-100">Спробуйте змінити параметри пошуку</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,218px)] gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
