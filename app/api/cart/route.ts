import { NextResponse } from 'next/server'

export async function GET() {
  // Mock cart data matching assignment requirements
  const cartData = {
    items: [
      {
        product_id: 1,
        product_name: 'Bamboo Toothbrush (Pack of 4)',
        product_price: 299,
        quantity: 2,
        image: '/images/CopyofCopyofArtboard8.webp',
      },
      {
        product_id: 2,
        product_name: 'Reusable Cotton Produce Bags',
        product_price: 450,
        quantity: 1,
        image: '/images/il_570xN.3228132077_nj9s.webp',
      },
    ],
    shipping_fee: 50,
    discount_applied: 0,
  }

  return NextResponse.json(cartData)
}
