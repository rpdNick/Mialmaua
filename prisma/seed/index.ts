import "dotenv/config"
import { PrismaClient } from "../../generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
})
const prisma = new PrismaClient({ adapter })

async function main() {
  // Clear old data (if seed is run again)
  await prisma.color.deleteMany()
  await prisma.product.deleteMany()

  // Create product
  await prisma.product.create({
    data: {
      name: "Шовкова піжама «Лаванда»",
      slug: "silk-pajama-lavender",
      price: 129900, // 1299 UAH in cents
      description: "Легка шовкова піжама для комфортного сну.",
      material: "Шовк",
      category: "Шовкові",
      images: ["/products/pajama-1.jpg"],
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: {
        create: [
          { name: "Айворі", hex: "#F5F0E8" },
          { name: "Бежевий", hex: "#D4C4B0" },
        ],
      },
    },
  })

  await prisma.product.create({
    data: {
      name: "Шовковий халат «Пудра»",
      slug: "silk-robe-powder",
      price: 189900,
      description: "Елегантний шовковий халат з поясом.",
      material: "Шовк",
      category: "Шовкові",
      images: ["/products/silk-robe.jpg"],
      sizes: ["S", "M", "L"],
      colors: {
        create: [
          { name: "Пудра", hex: "#E8D5D0" },
          { name: "Шампань", hex: "#F7E7CE" },
        ],
      },
    },
  })

  await prisma.product.create({
    data: {
      name: "Бавовняна піжама «Хмаринка»",
      slug: "cotton-pajama-cloud",
      price: 89900,
      description: "М'яка бавовняна піжама на кожен день.",
      material: "Бавовна",
      category: "Бавовняні",
      images: ["/products/cotton-cloud.jpg"],
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: {
        create: [
          { name: "Білий", hex: "#FFFFFF" },
          { name: "Сіро-блакитний", hex: "#B0C4DE" },
        ],
      },
    },
  })

  await prisma.product.create({
    data: {
      name: "Бавовняний комплект «Morning»",
      slug: "cotton-set-morning",
      price: 119900,
      description: "Комплект: футболка + шорти з organic cotton.",
      material: "Бавовна",
      category: "Бавовняні",
      images: ["/products/cotton-morning.jpg"],
      sizes: ["S", "M", "L", "XL"],
      colors: {
        create: [
          { name: "Молочний", hex: "#FAF0E6" },
          { name: "Пісок", hex: "#C4A882" },
        ],
      },
    },
  })

  await prisma.product.create({
    data: {
      name: "Домашній костюм «Cozy»",
      slug: "homewear-cozy",
      price: 149900,
      description: "Теплий домашній костюм: худі + штани.",
      material: "Фліс",
      category: "Домашні костюми",
      images: ["/products/homewear-cozy.jpg"],
      sizes: ["S", "M", "L", "XL"],
      colors: {
        create: [
          { name: "Карамель", hex: "#C68642" },
          { name: "Графіт", hex: "#4A4A4A" },
        ],
      },
    },
  })

  await prisma.product.create({
    data: {
      name: "Домашній костюм «Mia»",
      slug: "homewear-mia",
      price: 159900,
      description: "Стильний домашній костюм з oversize кроєм.",
      material: "Велюр",
      category: "Домашні костюми",
      images: ["/products/homewear-mia.jpg"],
      sizes: ["XS", "S", "M", "L"],
      colors: {
        create: [
          { name: "Оливковий", hex: "#808000" },
          { name: "Теракота", hex: "#8B4513" },
        ],
      },
    },
  })
}

main()
  .then(() => {
    console.log("Seed completed!")
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })