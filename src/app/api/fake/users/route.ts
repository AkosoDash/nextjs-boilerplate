import { NextResponse } from 'next/server'

const fakeUsers = Array.from({ length: 111 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`
}))

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const pageParam = searchParams.get('page')
  const limitParam = searchParams.get('limit')

  if (pageParam === null || limitParam === null) {
    return NextResponse.json({
      data: fakeUsers,
      total: fakeUsers.length
    })
  }

  const page = parseInt(pageParam)
  const limit = parseInt(limitParam)

  const start = (page - 1) * limit
  const end = start + limit
  const data = fakeUsers.slice(start, end)

  return NextResponse.json({
    data,
    total: fakeUsers.length
  })
}
