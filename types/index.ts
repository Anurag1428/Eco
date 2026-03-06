export interface CartItem {
  product_id: string
  product_name: string
  product_price: number
  quantity: number
  image: string
}

export interface CartData {
  items: CartItem[]
  shipping_fee: number
  discount_applied: number
}

export interface ShippingAddress {
  fullName: string
  email: string
  phoneNumber: string
  pinCode: string
  city: string
  state: string
}

export interface CheckoutStore {
  shippingAddress: ShippingAddress | null
  cartData: CartData | null
  setShippingAddress: (address: ShippingAddress) => void
  setCartData: (data: CartData) => void
  clearCheckout: () => void
}
