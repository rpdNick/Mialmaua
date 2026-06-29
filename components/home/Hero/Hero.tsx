import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared/Container';
import { MoveUpRight } from 'lucide-react';
import { HeroTeasers } from './HeroTeasers';

export function Hero() {
  return (
    <section className="py-4 md:py-8">
      <Container>
        <div className="grid gap-3.5 lg:grid-cols-[1fr_540px] md:grid-cols-[1fr_540px] md:items-center">
          <div className="flex flex-col gap-7.5">
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-extrabold">
              Soft
              <br />
              moments.
            </h1>
            <p className="max-w-md text-brown-100">Жіночі піжами та домашній одяг — створені для тихого комфорту й затишних ранків.</p>
            <Button asChild className="h-12 rounded-full pl-6 pr-1.5 w-fit">
              <Link href="/catalog" className="inline-flex items-center gap-3">
                <span>Купити зараз</span>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-black">
                  <MoveUpRight className="size-4" />
                </span>
              </Link>
            </Button>
            <HeroTeasers />
          </div>
          <div className="relative aspect-4/5 overflow-hidden rounded-lg">
            <Image src="/images/hero_banner.jpg" alt="Колекція Mialmaua" sizes="(max-width: 767px) 100vw, 540px" fill className="object-cover" priority />
          </div>
        </div>
      </Container>
    </section>
  );
}
