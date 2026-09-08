import { prisma } from '@/lib/prisma';
import { ProductCard } from '../shared/ProductCard';
import type { ProductWithColors } from '../shared/ProductCard';

type SimilarProductsProps = {
  product: ProductWithColors;
};

export async function SimilarProducts({ product }: SimilarProductsProps) {
  const similarProducts = await prisma.product.findMany({
    where: {
      category: product.category,
      slug: { not: product.slug },
    },
    take: 3,
    include: { colors: true },
  });
  
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-extrabold">Схожі товари</h2>
      <section className="grid grid-cols-[repeat(auto-fill,182px)] gap-6">
        {similarProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>
    </section>
  );
}
