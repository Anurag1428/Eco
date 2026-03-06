import { CartItem } from '@/types'

interface OrderSummaryProps {
  items: CartItem[]
  shippingFee: number
  discountApplied: number
}

export default function OrderSummary({ items, shippingFee, discountApplied }: OrderSummaryProps) {
  // Calculate subtotal as sum of (price × quantity) for all items
  const subtotal = items.reduce((sum, item) => sum + (item.product_price * item.quantity), 0)
  
  // Calculate grand total as (subtotal + shipping_fee - discount_applied)
  const grandTotal = subtotal + shippingFee - discountApplied

  return (
    <div className="bg-gray-50 rounded-lg p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
      
      {/* Cart Items */}
      <div className="space-y-3 mb-4">
        {items.map((item) => (
          <div key={item.product_id} className="flex justify-between text-sm">
            <span className="text-gray-600">
              {item.product_name} × {item.quantity}
            </span>
            <span className="text-gray-900 font-medium">
              ${(item.product_price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* Pricing Breakdown */}
      <div className="border-t border-gray-200 pt-4 space-y-2">
        {/* Subtotal */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-gray-900">${subtotal.toFixed(2)}</span>
        </div>

        {/* Shipping Fee */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping Fee</span>
          <span className="text-gray-900">${shippingFee.toFixed(2)}</span>
        </div>

        {/* Discount (only show if applicable) */}
        {discountApplied > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Discount</span>
            <span className="text-green-600">-${discountApplied.toFixed(2)}</span>
          </div>
        )}

        {/* Grand Total */}
        <div className="flex justify-between text-base md:text-lg font-semibold pt-2 border-t border-gray-200">
          <span className="text-gray-900">Grand Total</span>
          <span className="text-gray-900">${grandTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}
