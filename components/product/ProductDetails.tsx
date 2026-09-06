'use client';

import { formatPrice } from '@/lib/utils';
import type { ProductWithColors } from '@/components/shared/ProductCard';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import { INSTAGRAM_URL } from '@/lib/constants';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type ProductDetailsProps = {
  product: ProductWithColors;
};

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedColorId, setSelectedColorId] = useState(product.colors[0]?.id ?? '');
  const selectedColor = product.colors.find((c) => c.id === selectedColorId);

  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? '');

  return (
    <div className="min-w-82">
      <h2 className="text-2xl font-extrabold">{product.name}</h2>
      <div>{formatPrice(product.price)}</div>
      <div className="flex flex-col gap-2 mt-7">
        <div>
          <span className="mr-1">Колір:</span>
          <span className="text-brown-100">{selectedColor?.name ?? '—'}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((color) => (
            <button key={color.id} type="button" title={color.name} onClick={() => setSelectedColorId(color.id)} className={`size-6 rounded-full border border-black/10 transition-shadow cursor-pointer ${selectedColorId === color.id ? 'ring-2 ring-foreground' : 'opacity-70'}`} style={{ backgroundColor: color.hex }} aria-label={color.name} aria-pressed={selectedColorId === color.id} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-7">
        <div className="flex items-center justify-between gap-20">
          <span className="mr-1">Розмір:</span>
          <span className="text-brown-100 underline">Таблиця розмірів</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button key={size} type="button" onClick={() => setSelectedSize(size)} className={`min-w-10 rounded-2xl border px-3 py-2 text-sm transition-colors cursor-pointer ${selectedSize === size ? 'border-foreground bg-foreground text-background' : 'border-black/10 opacity-70'}`}>
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-7">
        <Button type="button" variant="default" size="lg" className="flex justify-between rounded-full pl-6 pr-1.5 w-full cursor-pointer">
          Додати в кошик
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-black">
            <MoveUpRight className="size-4" />
          </span>
        </Button>
        <Button asChild variant="outline" size="lg" className="w-full rounded-full">
          <Link href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            Написати в Instagram
          </Link>
        </Button>
      </div>

      <div className="mt-7">
        <Accordion defaultValue={['description']} type="multiple" className="w-full">
          <AccordionItem className='' value="description">
            <AccordionTrigger className="text-lg font-semibold">Опис</AccordionTrigger>
            <AccordionContent>{product.description ?? '—'}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="material">
            <AccordionTrigger className="text-lg font-semibold">Склад та догляд</AccordionTrigger>
            <AccordionContent>
              <p>Матеріал: {product.material ?? '—'}</p>
              <p>Догляд: делікатне прання при 30°C, не відбілювати.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="shipping" >
            <AccordionTrigger className="text-lg font-semibold">Доставка та оплата</AccordionTrigger>
            <AccordionContent>Доставка Новою Поштою. Оплата: накладений платіж або карткою онлайн.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="returns">
            <AccordionTrigger className="text-lg font-semibold">Повернення та обмін</AccordionTrigger>
            <AccordionContent>Повернення протягом 14 днів, якщо товар не використовувався...</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
