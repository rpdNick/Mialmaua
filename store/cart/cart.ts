import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartStore } from './types';

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const index = state.items.findIndex(
            (i) =>
              i.productId === item.productId &&
              i.color === item.color &&
              i.size === item.size,
          );
          if (index === -1) {
            return { items: [...state.items, item] };
          }
          const items = state.items.map((i, idx) =>
            idx === index ? { ...i, quantity: i.quantity + item.quantity } : i,
          );
          return { items };
        }),

      removeItem: (productId, color, size) =>
        set((state) => ({
          items: state.items.filter(
            (i) =>
              !(i.productId === productId && i.color === color && i.size === size),
          ),
        })),

      updateQuantity: (productId, color, size, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, color, size);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.productId === productId && i.color === color && i.size === size
              ? { ...i, quantity }
              : i,
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      subtotal: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    {
      name: 'mialmaua-cart',
    },
  ),
);