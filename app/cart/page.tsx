import { Container } from '@/components/shared/Container';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import type { CartItemType } from '@/components/cart/types';

const mockItems: CartItemType[] = [
  {
    productId: '1',
    name: 'Шовкова піжама «Лаванда»',
    image: '/products/pajama-1.jpg',
    color: 'Айворі',
    size: 'M',
    price: 129900,
    quantity: 1,
  },
  {
    productId: '2',
    name: 'Шовковий халат «Пудра»',
    image: '/products/silk-robe.jpg',
    color: 'Пудра',
    size: 'M',
    price: 189900,
    quantity: 1,
  },
];

export default function CartPage() {
  return (
    <section className="py-4 md:py-8">
      <Container>
        <h1 className="mb-6 text-4xl font-extrabold">Кошик</h1>
        <section className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_auto] items-start">
          <div className="flex flex-col gap-4">
            {mockItems.map((item) => (
              <CartItem key={`${item.productId}-${item.color}-${item.size}`} item={item} />
            ))}
          </div>
          <CartSummary />
        </section>
      </Container>
    </section>
  );
}
