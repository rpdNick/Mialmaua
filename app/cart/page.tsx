import { Container } from '@/components/shared/Container';
import { CartContent } from '@/components/cart/CartContent';


export default function CartPage() {
  return (
    <section className="py-4 md:py-8">
      <Container>
        <h1 className="mb-6 text-4xl font-extrabold">Кошик</h1>
        <CartContent />
      </Container>
    </section>
  );
}
