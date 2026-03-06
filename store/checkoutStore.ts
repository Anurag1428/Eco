import { create } from 'zustand'
import type { CheckoutStore } from '@/types'

export const useCheckoutStore = create<CheckoutStore>((set) => ({
  shippingAddress: null,
  cartData: null,
  setShippingAddress: (address) => set({ shippingAddress: address }),
  setCartData: (data) => set({ cartData: data }),
  clearCheckout: () => set({ shippingAddress: null, cartData: null }),
}))
