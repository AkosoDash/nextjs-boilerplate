import { NextResponse } from 'next/server'
import { fakePrivileges } from '../privileges/route'

// Generate roles with privilegeIds
const fakeRoles = Array.from({ length: 10 }, (_, i) => {
  const shuffled = fakePrivileges.sort(() => 0.5 - Math.random())
  const privilegeIds = shuffled.slice(0, Math.floor(Math.random() * 5) + 1).map(p => p.id)

  return {
    id: i + 1,
    name: `Role ${i + 1}`,
    description: `Deskripsi untuk Role ${i + 1}`,
    privilegeIds
  }
})

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const pageParam = searchParams.get('page')
  const sizeParam = searchParams.get('size')

  const page = pageParam ? parseInt(pageParam) : 0
  const size = sizeParam ? parseInt(sizeParam) : 10

  const start = page * size
  const end = start + size

  const data = fakeRoles.slice(start, end).map(role => {
    const populatedPrivileges = fakePrivileges.filter(p => role.privilegeIds.includes(p.id))
    return {
      ...role,
      privileges: populatedPrivileges
    }
  })

  return NextResponse.json({
    data,
    total: fakeRoles.length
  })
}
