import CartPageClient from '@/components/CartPageClient'
import ErrorState from '@/components/ErrorState'
import { CartData } from '@/types'

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic'

async function getCartData(): Promise<CartData> {
  try {
    // Use absolute URL for server-side fetch, fallback to relative for client
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/cart`, {
      cache: 'no-store', // Ensure fresh data on each request
    })

    if (!res.ok) {
      throw new Error('Failed to fetch cart data')
    }

    return res.json()
  } catch (error) {
    console.error('Cart API Error:', error)
    throw error
  }
}

export default async function CartPage() {
  let cartData: CartData | null = null
  let error: string | null = null

  try {
    cartData = await getCartData()
  } catch (err) {
    error = 'Unable to load cart data. Please refresh the page.'
  }

  // Error state
  if (error || !cartData) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
          <ErrorState message={error || 'Unable to load cart data. Please refresh the page.'} />
        </div>
      </main>
    )
  }

  // Empty cart state
  if (cartData.items.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
          
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <p className="text-gray-600 text-lg">Your cart is empty</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <CartPageClient cartData={cartData} />
    </main>
  )
}
