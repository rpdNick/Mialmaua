import { prisma } from '@/lib/prisma';
import { Container } from '@/components/shared/Container';
import { CatalogContent } from '@/components/catalog/CatalogContent';
import { Suspense } from 'react';
import { CatalogSkeleton } from '@/components/catalog/catalogSkeleton';

export default async function CatalogPage() {
  const products = await prisma.product.findMany({
    include: { colors: true },
    orderBy: { name: 'asc' },
  });

  return (
    <Container className="py-8">
      <h1 className="mb-6 text-4xl font-extrabold">Каталог</h1>
      <Suspense fallback={<CatalogSkeleton />}>
        <CatalogContent products={products} />
      </Suspense>
    </Container>
  );
}
