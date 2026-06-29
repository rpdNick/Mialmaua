import Link from 'next/link';
import { Navbar } from './Navbar';
import Image from 'next/image';
import { Container } from './Container';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold">
          <Image src="/images/logo.svg" alt="Mialmaua" width={107} height={30} priority />
        </Link>

        <Navbar />

        <Link href="/cart">Кошик</Link>
      </Container>
    </header>
  );
}
