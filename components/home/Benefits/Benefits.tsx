import { Truck, RefreshCw, Headphones } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { BenefitItem, type Benefit } from './BenefitItem';

const benefits: Benefit[] = [
  {
    title: 'Швидка доставка',
    description: 'по всій Україні',
    icon: Truck,
  },
  {
    title: 'Легкий обмін',
    description: 'та повернення',
    icon: RefreshCw,
  },
  {
    title: 'Підтримка',
    description: 'в Instagram та Telegram',
    icon: Headphones,
  },
];

export function Benefits() {
  return (
    <section className="py-4 md:py-8">
      <Container>
        <div className="flex justify-center gap-6 flex-row">
          {benefits.map((benefit) => (
            <BenefitItem key={benefit.title} benefit={benefit} />
          ))}
        </div>
      </Container>
    </section>
  );
}
