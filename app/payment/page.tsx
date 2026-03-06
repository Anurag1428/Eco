'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCheckoutStore } from '@/store/checkoutStore'
import OrderSummary from '@/components/OrderSummary'

export default function PaymentPage() {
  const router = useRouter()
  const { shippingAddress, cartData } = useCheckoutStore()
  const [isProcessing, setIsProcessing] = useState(false)

  // Navigation guard: redirect to shipping if no address
  useEffect(() => {
    if (!shippingAddress) {
      router.push('/shipping')
    }
  }, [shippingAddress, router])

  // Handle payment simulation
  const handlePayment = async () => {
    setIsProcessing(true)
    
    // Simulate payment processing delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Navigate to success page
    router.push('/success')
  }

  // Show loading state while checking navigation guard
  if (!shippingAddress || !cartData) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Payment Confirmation
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column: Shipping Address */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
              Shipping Address
            </h2>
            <div className="space-y-2 text-sm md:text-base">
              <p className="text-gray-900 font-medium">{shippingAddress.fullName}</p>
              <p className="text-gray-600">{shippingAddress.email}</p>
              <p className="text-gray-600">{shippingAddress.phoneNumber}</p>
              <p className="text-gray-600">
                {shippingAddress.city}, {shippingAddress.state} - {shippingAddress.pinCode}
              </p>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
            <OrderSummary
              items={cartData.items}
              shippingFee={cartData.shipping_fee}
              discountApplied={cartData.discount_applied}
            />
          </div>
        </div>

        {/* Payment Button */}
        <div className="mt-8">
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 md:py-4 px-6 rounded-lg transition-colors duration-200 text-base md:text-lg"
          >
            {isProcessing ? 'Processing Payment...' : 'Pay Securely'}
          </button>
        </div>
      </div>
    </main>
  )
}
