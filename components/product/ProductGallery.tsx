'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

type ProductGalleryProps = {
  images: string[];
  name: string;
};

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setActiveIndex(api.selectedScrollSnap());

    onSelect();
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <div className="flex flex-col gap-4">
      <Carousel setApi={setApi} opts={{ duration: 30 }}>
        <CarouselContent className="ml-0">
          {images.map((src, index) => (
            <CarouselItem className="pl-0" key={src}>
              <div className="relative w-full max-md:h-[min(380px,45vh)] md:aspect-175/233 overflow-hidden rounded-md bg-muted">
                <Image
                  src={src}
                  alt={`${name} — фото ${index + 1}`}
                  fill
                  sizes="(max-width: 450px) 100vw, 50vw"
                  className="object-cover object-top"
                  loading="eager"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => api?.scrollTo(i)}
              className={`relative size-18 overflow-hidden rounded-md border transition-opacity duration-200 cursor-pointer ${
                i === activeIndex ? 'ring-2 ring-foreground' : 'border-black/10 opacity-70'
              }`}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="70px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}