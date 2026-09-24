import Link from 'next/link';
import { Ghost, MoveUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CartEmpty() {
  return (
    <section className="flex items-center justify-center py-12 md:py-16">
      <div className="w-full max-w-md rounded-lg bg-muted px-6 py-10 text-center md:px-10 md:py-12">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-white shadow-sm">
          <Ghost className="size-8 text-brown-100" strokeWidth={1.5} />
        </div>
        <h2 id="cart-empty-title" className="text-xl font-semibold text-foreground md:text-2xl">
          Кошик поки порожній
        </h2>
        <div className="mt-8 flex flex-col items-center gap-3">
          <Button asChild variant="default" size="lg" className="flex justify-between rounded-full pl-6 pr-1.5">
            <Link href="/catalog" className="flex justify-between">
              Перейти до каталогу
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-black">
                <MoveUpRight className="size-4" />
              </span>
            </Link>
          </Button>
          <Link href="/" className="text-sm text-brown-100 underline-offset-4 hover:text-foreground hover:underline">
            На головну
          </Link>
        </div>
      </div>
    </section>
  );
}
