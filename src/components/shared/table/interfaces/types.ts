import { ColumnDef } from '@tanstack/react-table'

export interface UserDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}
