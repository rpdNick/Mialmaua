import Link from 'next/link';
import { Navbar } from './Navbar';
import Image from 'next/image';
import { Container } from './Container';
import { CartBadge } from '@/components/cart/CartBadge';
import { LoginButton } from '@/components/auth/LoginButton';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold">
          <Image className="w-26.75 h-7.5" src="/images/logo.svg" alt="Mialmaua" width={107} height={30} priority />
        </Link>

        <Navbar />

        <div className="flex items-center gap-3">
          <LoginButton />
          <CartBadge />
        </div>
      </Container>
    </header>
  );
}
