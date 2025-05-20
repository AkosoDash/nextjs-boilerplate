// src/app/user/page.tsx
import { MasterUserView } from '@/features/master-user/components/(page)/MasterUserView'
import { userApi } from '@/features/master-user/services/userApi'

type Props = {
  searchParams?: {
    page?: string
    limit?: string
  }
}

export default async function Page({ searchParams }: Props) {
  const { page: pageParam, limit: limitParam } = (await searchParams) || {}
  const page = parseInt(pageParam || '1')
  const limit = parseInt(limitParam || '10')
  const [data] = await Promise.all([userApi.getUsers({ page, limit })])
  return <MasterUserView data={data} />
}
