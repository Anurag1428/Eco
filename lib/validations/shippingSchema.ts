import { z } from 'zod'

export const shippingSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email format'),
  phoneNumber: z.string().regex(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
  pinCode: z.string().min(1, 'PIN code is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required')
})

export type ShippingFormData = z.infer<typeof shippingSchema>
