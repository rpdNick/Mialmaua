import Link from 'next/link';
import { Navbar } from './Navbar';
import Image from 'next/image';
import { Container } from './Container';
import { ShoppingCart } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold">
          <Image className="w-[107px] h-[30px]" src="/images/logo.svg" alt="Mialmaua" width={107} height={30} priority />
        </Link>

        <Navbar />

        <Link href="/cart" className="relative">
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-destructive text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">1</span>
        </Link>
      </Container>
    </header>
  );
}
