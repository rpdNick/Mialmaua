import Image from 'next/image';

type ProductGalleryImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export function ProductGalleryImage({ src, alt, priority = false }: ProductGalleryImageProps) {
  return (
    <div className="relative w-full max-md:h-[min(380px,45vh)] md:aspect-175/233 overflow-hidden bg-muted">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 450px) 50vw, 450px"
        className="object-cover object-top"
        loading={priority ? 'eager' : undefined}
        priority={priority}
      />
    </div>
  );
}