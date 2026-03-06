# Ecoyaan Checkout Flow

A simplified e-commerce checkout system built with Next.js demonstrating server-side rendering, form validation, state management, and responsive design.

## Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **State Management**: Zustand
- **Form Management**: React Hook Form
- **Validation**: Zod
- **Styling**: TailwindCSS

## Features

- Cart page with order summary
- Shipping form with validation
- Payment confirmation
- Success page
- Mock cart API
- Zustand state management
- Responsive design

## Getting Started

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
├── app/                   # Next.js pages and API routes
│   ├── api/              # API endpoints
│   ├── shipping/         # Shipping page
│   ├── payment/          # Payment page
│   ├── success/          # Success page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Cart page
├── components/           # React components
├── store/                # Zustand state management
├── types/                # TypeScript types
├── lib/                  # Utility functions and validation schemas
├── public/               # Static assets
├── package.json          # Dependencies
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── README.md             # Project documentation
```

## Checkout Flow

1. **Cart Page** (`/`): View cart items and order summary
2. **Shipping Page** (`/shipping`): Enter shipping details with form validation
3. **Payment Page** (`/payment`): Confirm order and process payment
4. **Success Page** (`/success`): Order confirmation

## License

This project is created as an internship assignment for Ecoyaan.
