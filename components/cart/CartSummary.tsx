'use client';

import { ArrowRight, MoveUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { formatPrice } from '@/lib/utils';
import { useCartStore } from '@/store/cart/cart';

export default function CartSummary() {
  const total = useCartStore((state) => state.subtotal());

  return (
    <div className="rounded-lg bg-muted p-4 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-brown-100 uppercase font-medium">промокод</p>
        <div className="flex items-center gap-2">
          <Input type="text" placeholder="Введіть промокод" className="rounded-full bg-white text-brown-100 placeholder:text-brown-100 border-border-outline/15 h-12 shadow-none" />
          <Button type="button" variant="outline" className="rounded-full min-w-12 bg-transparent" size="lg">
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
      <div className="h-px bg-border-outline/15"></div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-brown-100 font-medium">Сума</p>
          <p className="text-sm text-foreground font-medium">{formatPrice(total)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-brown-100 font-medium">Доставка</p>
          <p className="text-sm text-brown-100 font-medium">за тарифами НП</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-brown-100 font-medium">Разом</p>
          <p className="text-sm text-foreground font-medium">{formatPrice(total)}</p>
        </div>
      </div>
      <Button type="button" variant="default" size="lg" className="flex justify-between rounded-full pl-6 pr-1.5 w-full">
        Оформити замовлення
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-black">
          <MoveUpRight className="size-4" />
        </span>
      </Button>
      <p className="text-sm text-brown-100 font-medium">Безкоштовна доставка від {formatPrice(300000)}</p>
    </div>
  );
}
