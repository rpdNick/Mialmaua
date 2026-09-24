"use client"

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cart/cart';

export function CartBadge() {
  const items = useCartStore((state) => state.items);
  const hasHydrated = useCartStore((s) => s._hasHydrated);
  const count = items.reduce((n, i) => n + i.quantity, 0);

  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="w-6 h-6" />
      {hasHydrated && count > 0 && (
        <span className="absolute -top-2 -right-2 bg-destructive text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">{count}</span>
      )}
    </Link>
  );
}
