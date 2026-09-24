import type { CartItemType } from '@/components/cart/types';

export type CartStore = {
  items: CartItemType[];
  addItem: (item: CartItemType) => void;
  removeItem: (productId: string, color: string, size: string) => void;
  updateQuantity: (productId: string, color: string, size: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: () => number;
};