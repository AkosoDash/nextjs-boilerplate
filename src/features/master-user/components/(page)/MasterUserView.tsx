import { UserDataTable } from '../(table)'
import { userColumns } from '../(table)/columns'
import { MasterUsersViewProps } from '../(table)/types'

export function MasterUserView({ data }: MasterUsersViewProps) {
  return <UserDataTable columns={userColumns} data={data} />
}
