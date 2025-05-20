import { NextResponse } from 'next/server'

export const fakePrivileges = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Privilege ${i + 1}`,
  code: `PRIV_${(i + 1).toString().padStart(3, '0')}`
}))

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const pageParam = searchParams.get('page')
  const sizeParam = searchParams.get('size')

  if (pageParam === null || sizeParam === null) {
    return NextResponse.json({
      data: fakePrivileges,
      total: fakePrivileges.length
    })
  }

  const page = parseInt(pageParam)
  const size = parseInt(sizeParam)

  const start = page * size
  const end = start + size
  const data = fakePrivileges.slice(start, end)

  return NextResponse.json({
    data,
    total: fakePrivileges.length
  })
}
