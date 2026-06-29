import Link from 'next/link';
import Image from 'next/image';

export type Category = {
  title: string;
  href: string;
  image: string;
};

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={category.href} className="group relative block overflow-hidden rounded-lg aspect-3/4">
      <Image src={category.image} alt={category.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="270px" />
      <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="text-lg font-semibold text-white">{category.title}</h3>
      </div>
    </Link>
  );
}
