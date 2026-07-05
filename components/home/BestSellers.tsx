import { Container } from '@/components/shared/Container';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { ProductCard } from '@/components/shared/ProductCard';

export async function BestSellers() {
  const products = await prisma.product.findMany({
    take: 3,
    include: { colors: true },
  });

  return (
    <section className="py-4 md:py-8">
      <Container>
        <div className="flex w-full justify-between items-center gap-4 mb-6">
          <h2 className="text-4xl font-extrabold">Хіти продажів</h2>
          <Link className="text-sm" href="/catalog">
            Дивитись всі
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,175px)] gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
