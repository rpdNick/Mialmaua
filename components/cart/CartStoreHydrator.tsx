'use client';

import { useEffect } from 'react';
import { useCartStore } from '@/store/cart/cart';

export function CartStoreHydrator() {
  useEffect(() => {
    const finish = () => useCartStore.getState().setHasHydrated();

    const unsub = useCartStore.persist.onFinishHydration(finish);

    if (useCartStore.persist.hasHydrated()) {
      finish();
    } else {
      void useCartStore.persist.rehydrate();
    }

    return unsub;
  }, []);

  return null;
}