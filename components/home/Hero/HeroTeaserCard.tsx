import Link from 'next/link';
import Image from 'next/image';

type TeaserColor = {
  name: string;
  hex: string;
};

export type Teaser = {
  title: string;
  href: string;
  image: string;
  colors: TeaserColor[];
};

type HeroTeaserCardProps = {
  teaser: Teaser;
};

export function HeroTeaserCard({ teaser }: HeroTeaserCardProps) {
  return (
    <Link href={teaser.href} className="group flex flex-col gap-2 rounded-lg border border-border/20 bg-white p-3 transition-shadow hover:shadow-sm">
      <div className="relative aspect-square overflow-hidden rounded-md bg-muted">
        <Image src={teaser.image} alt={teaser.title} fill className="object-cover transition-transform group-hover:scale-105" sizes="(max-width: 768px) 33vw, 180px" />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm leading-snug text-foreground">{teaser.title}</p>

        <div className="flex flex-wrap gap-1.5">
          {teaser.colors.map((color) => (
            <span key={color.hex} title={color.name} className="size-3.5 rounded-full border border-black/10" style={{ backgroundColor: color.hex }} />
          ))}
        </div>
      </div>
    </Link>
  );
}
