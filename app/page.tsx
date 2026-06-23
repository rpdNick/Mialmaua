import { prisma } from "@/lib/prisma"
import { formatPrice } from "@/lib/utils"

export default async function Home() {
  const products = await prisma.product.findMany({
    include: { colors: true },
    orderBy: { createdAt: "asc" },
  })

  console.log(products);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Тест: товари з БД</h1>
      <ul className="space-y-2">
        {products.map((product) => (
          <li key={product.id} className="border p-3 rounded">
            <strong>{product.name}</strong>
            <span className="ml-2 text-muted-foreground">
              {formatPrice(product.price)}
            </span>
            <span className="ml-2 text-sm">({product.category})</span>
          </li>
        ))}
      </ul>
    </div>
  )
}