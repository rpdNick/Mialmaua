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
        <div
          className="grid gap-3.5
        [grid-template-areas:'title'_'desc'_'image'_'cta'_'teasers']
        md:grid-cols-[1fr_540px]
        md:gap-x-7.5 md:gap-y-7.5
        md:[grid-template-areas:'title_image'_'desc_image'_'cta_image'_'teasers_image']"
        >
          <h1 className="[grid-area:title] text-4xl md:text-5xl lg:text-8xl font-extrabold">
            Soft moments.
          </h1>

          <p className="[grid-area:desc] max-w-md text-brown-100">Жіночі піжами та домашній одяг — створені для тихого комфорту й затишних ранків.</p>

          <div className="[grid-area:image] relative aspect-4/5 md:aspect-auto overflow-hidden rounded-lg">
            <Image src="/images/hero_banner.jpg" alt="Колекція Mialmaua" sizes="(max-width: 767px) 100vw, 540px" fill className="object-cover" priority />
          </div>

          <div className="[grid-area:cta]">
            <Button asChild className="h-12 rounded-full pl-6 pr-1.5 w-fit">
              <Link href="/catalog" className="inline-flex items-center gap-3">
                <span>Купити зараз</span>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-black">
                  <MoveUpRight className="size-4" />
                </span>
              </Link>
            </Button>
          </div>
          <div className="[grid-area:teasers]">
            <HeroTeasers />
          </div>
        </div>
      </Container>
    </section>
  );
}
