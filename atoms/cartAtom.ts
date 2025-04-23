import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Getter } from "jotai";

export interface CartItem {
  product: any;
  product_id: string | number;
  product_quantity: number;
  name: string;
  price: number;
  originalPrice?: number;
  currency: {
    symbol: string;
  };
  image_url: string;
  category: string;
}

export interface CartState {
  items: any[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

export const cartAtom = atomWithStorage<CartState>("cart", initialState);

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
