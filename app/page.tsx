import CartPageClient from '@/components/CartPageClient'
import ErrorState from '@/components/ErrorState'
import { CartData } from '@/types'
import { headers } from 'next/headers'

export const dynamic = 'force-dynamic'

async function getCartData(): Promise<CartData> {
  try {
    const headersList = headers()
    const host = headersList.get('host')
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'

    const res = await fetch(`${protocol}://${host}/api/cart`, {
      cache: 'no-store',
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
  } catch {
    error = 'Unable to load cart data. Please refresh the page.'
  }

  if (error || !cartData) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Shopping Cart
          </h1>
          <ErrorState message={error} />
        </div>
      </main>
    )
  }

  if (cartData.items.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Shopping Cart
          </h1>

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