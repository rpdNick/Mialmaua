import Image from 'next/image';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Minus, Plus, X } from 'lucide-react';
import type { CartItemType } from './types';

type CartItemProps = {
  item: CartItemType;
};

export default function CartItem({ item }: CartItemProps) {
  const lineTotal = item.price * item.quantity;

  return (
    <div className="relative flex gap-4 rounded-lg bg-white p-4 border border-border-outline/15">
      <div className="relative shrink-0 overflow-hidden rounded-md bg-muted w-28 aspect-175/233">
        <Image src={item.image} alt={item.name} fill sizes="100%" className="object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <h3 className="text-base font-medium">{item.name}</h3>
          <p className="text-sm text-muted-foreground">
            {item.color} / {item.size}
          </p>
        </div>
        <div>
          <p className="text-base font-medium">{formatPrice(lineTotal)}</p>
        </div>
        <div className="flex items-center gap-2 rounded-full p-2 border border-border-outline/15 w-fit">
          <Button type="button" variant="ghost" size="icon-sm" aria-label="Зменшити">
            <Minus className="size-4" />
          </Button>
          <span className="min-w-6 text-center text-sm">{item.quantity}</span>
          <Button type="button" variant="ghost" size="icon-sm" aria-label="Збільшити">
            <Plus className="size-4" />
          </Button>
        </div>
      </div>
      <Button type="button" className="absolute top-2 right-2" variant="ghost" size="icon">
        <X className="size-4 text-brown-100" />
      </Button>
    </div>
  );
}
