import { ProductGalleryCarousel } from './ProductGalleryCarousel';
import { ProductGallerySingle } from './ProductGallerySingle';

type ProductGalleryProps = {
  images: string[];
  name: string;
};

export function ProductGallery({ images, name }: ProductGalleryProps) {
  if (images.length <= 1) {
    const src = images[0];
    if (!src) return null;
    return <ProductGallerySingle src={src} name={name} />;
  }

  return <ProductGalleryCarousel images={images} name={name} />;
}