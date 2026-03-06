import Image from 'next/image'
import { CartItem as CartItemType } from '@/types'

interface CartItemProps {
  item: CartItemType
}

export default function CartItem({ item }: CartItemProps) {
  const lineTotal = item.product_price * item.quantity

  return (
    <div className="flex gap-4 py-4 border-b border-gray-200">
      {/* Product Image */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
        <Image
          src={item.image}
          alt={item.product_name}
          width={96}
          height={96}
          className="object-cover rounded"
          unoptimized
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        {/* Name and Price */}
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{item.product_name}</h3>
          <p className="text-sm text-gray-600 mt-1">
            ${item.product_price.toFixed(2)} each
          </p>
        </div>

        {/* Quantity and Line Total */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="text-sm">
            <span className="text-gray-600">Qty: </span>
            <span className="font-medium text-gray-900">{item.quantity}</span>
          </div>
          <div className="font-semibold text-gray-900 min-w-[80px] text-right">
            ${lineTotal.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  )
}
