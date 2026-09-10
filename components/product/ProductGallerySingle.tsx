import { ProductGalleryImage } from './ProductGalleryImage';

type ProductGallerySingleProps = {
  src: string;
  name: string;
};

export function ProductGallerySingle({ src, name }: ProductGallerySingleProps) {
  return <ProductGalleryImage src={src} alt={name} priority />;
}
