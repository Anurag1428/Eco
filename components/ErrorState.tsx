'use client'

interface ErrorStateProps {
  message: string
}

export default function ErrorState({ message }: ErrorStateProps) {
  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
      <p className="text-red-800 mb-4">{message}</p>
      <button
        onClick={handleRefresh}
        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
      >
        Refresh Page
      </button>
    </div>
  )
}
