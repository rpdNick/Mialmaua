import { Container } from './Container';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

export function Footer() {
  return (
    <footer className="bg-muted">
      <Container className="flex flex-col items-center justify-center p-[60px] gap-4">
        <Link href="/" className="font-semibold">
          <Image className="w-[210px] h-[45px]" src="/images/logo.svg" alt="Mialmaua" width={210} height={45} priority />
        </Link>
        <p className="text-sm text-brown-100">Жіночі піжами та одяг для дому</p>
        <div className="flex gap-4">
          <Button asChild variant="outline" size="icon" className="rounded-full">
            <Link href="#">
              <Image className="w-[20px] h-[20px]" src="/images/icons/instagram.svg" alt="Instagram" width={20} height={20} priority />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-full">
            <Link href="#">
              <Image className="w-[20px] h-[20px]" src="/images/icons/telegram.svg" alt="Telegram" width={20} height={20} priority />
            </Link>
          </Button>
        </div>
        <p className="text-xs text-brown-100">© 2026 Mialmaua · Політика конфіденційності</p>
      </Container>
    </footer>
  );
}
