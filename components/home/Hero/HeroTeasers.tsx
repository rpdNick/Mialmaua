import { HeroTeaserCard, type Teaser } from "./HeroTeaserCard"

const teasers: Teaser[] = [
  {
    title: "Піжама із шовку",
    href: "/catalog/silk-pajama-lavender",
    image: "/teasers/silk.jpg",
    colors: [
      { name: "Сірий", hex: "#B8B8B8" },
      { name: "Бежевий", hex: "#D4C4B0" },
      { name: "Taupe", hex: "#8A7563" },
      { name: "Коричневий", hex: "#5C4033" },
    ],
  },
  {
    title: "Піжама бавовняна",
    href: "/catalog/cotton-pajama-cloud",
    image: "/teasers/cotton.jpg",
    colors: [
      { name: "Білий", hex: "#FFFFFF" },
      { name: "Молочний", hex: "#FAF0E6" },
    ],
  },
  {
    title: "Піжама з шортами",
    href: "/catalog/cotton-set-morning",
    image: "/teasers/shorts.jpg",
    colors: [
      { name: "Сіро-блакитний", hex: "#B0C4DE" },
      { name: "Пісок", hex: "#C4A882" },
    ],
  },
]

export function HeroTeasers() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {teasers.map((teaser) => (
        <HeroTeaserCard key={teaser.href} teaser={teaser} />
      ))}
    </div>
  )
}