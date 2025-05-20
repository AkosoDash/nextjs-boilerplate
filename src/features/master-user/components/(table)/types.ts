import { ColumnDef } from '@tanstack/react-table'

export interface Role {
  id: string
  name: string
}

export interface User {
  id: string
  username: string
  email: string
  role: Role
}

export type UserFormData = Omit<User, 'id'>

export interface MasterUsersViewProps {
  data: UserDataProps
}

export interface UserDataProps {
  data: User[]
  totalData: number
}

export interface UserDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}
