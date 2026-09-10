'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { ProductGalleryImage } from './ProductGalleryImage';

type ProductGalleryCarouselProps = {
  images: string[];
  name: string;
};

export function ProductGalleryCarousel({ images, name }: ProductGalleryCarouselProps) {
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
      <div className="rounded-md overflow-hidden">
        <Carousel setApi={setApi} opts={{ duration: 25 }}>
          <CarouselContent className="ml-0">
            {images.map((src, index) => (
              <CarouselItem className="pl-0" key={src}>
                <ProductGalleryImage src={src} alt={`${name} ${index + 1}`} priority={index === 0} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex gap-2">
        {images.map((src, i) => (
          <button key={src} type="button" onClick={() => api?.scrollTo(i, false)} className={`relative size-18 overflow-hidden rounded-md border transition-opacity duration-200 ${i === activeIndex ? 'ring-2 ring-foreground' : 'border-black/10 opacity-70'}`}>
            <Image src={src} alt="" fill className="object-cover" sizes="70px" />
          </button>
        ))}
      </div>
    </div>
  );
}
