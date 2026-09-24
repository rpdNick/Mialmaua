'use client';

import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import { useCartStore } from '@/store/cart/cart';
import { CartEmpty } from '@/components/cart/CartEmpty';

export function CartContent() {
  const items = useCartStore((state) => state.items);
  const hasHydrated = useCartStore((s) => s._hasHydrated);
  if (!hasHydrated) {
    return null;
  }

  if (items.length === 0) {
    return <CartEmpty />;
  }

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_auto] items-start">
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <CartItem key={`${item.productId}-${item.color}-${item.size}`} item={item} />
        ))}
      </div>
      <CartSummary />
    </section>
  );
}
