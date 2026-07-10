import { prisma } from "@/lib/prisma"
import { Container } from "@/components/shared/Container"
import { ProductCard } from "@/components/shared/ProductCard"

export default async function CatalogPage() {
  const products = await prisma.product.findMany({
    include: { colors: true },
    orderBy: { name: "asc" },
  })

  return (
    <Container className="py-8">
      <h1 className="mb-6 text-4xl font-extrabold">Каталог</h1>

      <div className="grid grid-cols-[repeat(auto-fill,175px)] gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  )
}