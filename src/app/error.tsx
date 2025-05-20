// app/error.tsx (Next.js 13+ Error Boundary)
'use client'

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className='grid h-screen place-items-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-red-600'>Error</h1>
        <p className='mt-4 text-lg'>{error.message}</p>
        <button onClick={reset} className='mt-6 rounded bg-blue-500 px-4 py-2 text-white'>
          Try Again
        </button>
      </div>
    </div>
  )
}
