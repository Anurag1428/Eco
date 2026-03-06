'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import CartItem from '@/components/CartItem'
import OrderSummary from '@/components/OrderSummary'
import { useCheckoutStore } from '@/store/checkoutStore'
import { CartData } from '@/types'

interface CartPageClientProps {
  cartData: CartData
}

export default function CartPageClient({ cartData }: CartPageClientProps) {
  const setCartData = useCheckoutStore((state) => state.setCartData)

  // Save cart data to store when component mounts
  useEffect(() => {
    setCartData(cartData)
  }, [cartData, setCartData])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Page Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
              Cart Items ({cartData.items.length})
            </h2>
            
            <div className="divide-y divide-gray-200">
              {cartData.items.map((item) => (
                <CartItem key={item.product_id} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <OrderSummary
              items={cartData.items}
              shippingFee={cartData.shipping_fee}
              discountApplied={cartData.discount_applied}
            />

            {/* Proceed to Checkout Button */}
            <Link
              href="/shipping"
              className="block w-full mt-6 bg-green-600 text-white text-center font-semibold py-3 md:py-4 rounded-lg hover:bg-green-700 transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
