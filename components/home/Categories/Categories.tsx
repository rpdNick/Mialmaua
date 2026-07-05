import { Container } from '@/components/shared/Container';
import Link from 'next/link';
import { CategoryCard, type Category } from './CategoryCard';

const categories: Category[] = [
  {
    title: 'Шовкові',
    href: '/catalog?category=Шовкові',
    image: '/categories/silk.jpg',
  },
  {
    title: 'Бавовняні',
    href: '/catalog?category=Бавовняні',
    image: '/categories/cotton.jpg',
  },
  {
    title: 'Домашні костюми',
    href: '/catalog?category=Домашні костюми',
    image: '/categories/homewear.jpg',
  },
  {
    title: 'Нова колекція',
    href: '/catalog',
    image: '/categories/new.jpg',
  },
];

export function Categories() {
  return (
    <section className="py-4 md:py-8">
      <Container>
        <div className="flex w-full justify-between items-center gap-4 mb-6">
          <h2 className="text-4xl font-extrabold">Категорії</h2>
          <Link className="text-sm" href="/catalog">
            Дивитись всі
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
