import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';
import type { Product, Color } from '@/generated/prisma/client';

export type ProductWithColors = Product & { colors: Color[] };

type ProductCardProps = {
  product: ProductWithColors;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/catalog/${product.slug}`} className="group flex flex-col gap-2 rounded-lg bg-white transition-shadow">
      <div className="relative aspect-175/233 overflow-hidden rounded-md bg-muted">
        <Image src={product.images[0]} alt={product.name} fill sizes="175px" loading='lazy' className="object-cover transition-transform group-hover:scale-105" />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm leading-snug text-foreground line-clamp-2 min-h-[38px]">{product.name}</p>
        <p className="text-sm font-semibold text-brown-100">{formatPrice(product.price)}</p>

        <div className="flex flex-wrap gap-1.5">
          {product.colors.map((color) => (
            <span key={color.id} title={color.name} className="size-3.5 rounded-full border border-black/10" style={{ backgroundColor: color.hex }} />
          ))}
        </div>
      </div>
    </Link>
  );
}
