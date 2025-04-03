import { atom, Getter } from "jotai";

export interface CartItem {
  product_id: string | number;
  product_quantity: number;
  name: string;
  price: number;
  currency: {
    symbol: string;
  };
  image_url: string;
  category: string;
}

export interface CartState {
  items: CartItem[];
  total: number;
}

export const cartAtom = atom<CartState>({
  items: [],
  total: 0,
});

// Derived atom for cart count
export const cartCountAtom = atom((get: Getter) => get(cartAtom).items.length);

// Derived atom for cart total
export const cartTotalAtom = atom((get: Getter) => {
  const cart = get(cartAtom);
  return cart.items.reduce(
    (total: number, item: CartItem) =>
      total + item.price * item.product_quantity,
    0
  );
});
