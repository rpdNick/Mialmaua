import { Hero } from '@/components/home/Hero/Hero';
import { Categories } from '@/components/home/Categories/Categories';
import { BestSellers } from '@/components/home/BestSellers';
import { Benefits } from '@/components/home/Benefits/Benefits';

export default function Home() {

  return (
    <>
      <Hero />
      <Categories />
      <BestSellers />
      <Benefits />
    </>
  );
}
