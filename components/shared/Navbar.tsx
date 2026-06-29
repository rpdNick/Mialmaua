import Link from "next/link";

export function Navbar() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <Link href="/catalog">Каталог</Link>
      <Link href="/delivery">Доставка</Link>
      <Link href="/about">Про нас</Link>
    </nav>
  )
}