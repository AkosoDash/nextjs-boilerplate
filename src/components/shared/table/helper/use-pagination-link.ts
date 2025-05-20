import { useSearchParams } from 'next/navigation'

export function usePaginationLink(page: number, limit: number) {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  params.set('page', String(page))
  params.set('limit', String(limit))
  return `?${params.toString()}`
}
