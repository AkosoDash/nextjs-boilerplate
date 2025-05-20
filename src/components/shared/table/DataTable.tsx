'use client'

import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { useState } from 'react'
import { UserDataTableProps } from './interfaces/types'
import { DataTableHeader } from './DataTableHeader'
import { DataTableBody } from './DataTableBody'
import { DataTablePagination } from './DataTablePagination'

export function DataTable<TData, TValue>({ columns, data }: UserDataTableProps<TData, TValue>) {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 })

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: { pagination }
  })

  return (
    <div>
      <div className='rounded-md border'>
        <DataTableHeader table={table} />
        <DataTableBody table={table} columns={columns} />
      </div>
      <DataTablePagination table={table} setPagination={setPagination} />
    </div>
  )
}
