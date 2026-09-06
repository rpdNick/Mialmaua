import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { Container } from '@/components/shared/Container';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductDetails } from '@/components/product/ProductDetails';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = await prisma.product.findUnique({
    where: { slug },
    include: { colors: true },
  });

  if (!product) notFound();

  return (
    <section className="py-4 md:py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[minmax(238px,450px)_1fr] gap-9">
          <ProductGallery images={product.images} name={product.name} />
          <ProductDetails product={product} />
        </div>
      </Container>
    </section>
  );
}
