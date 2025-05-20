'use client'
import { useReactTable, getCoreRowModel, getPaginationRowModel } from '@tanstack/react-table'
import { Table } from '@/components/ui/table'
import { DataTableBody } from '@/components/shared/table/DataTableBody'
import { DataTableHeader } from '@/components/shared/table/DataTableHeader'
import { UserDataProps } from './types'
import { useState } from 'react'
import { DataTablePagination } from '@/components/shared/table/DataTablePagination'
import { DataPageHeader } from '@/components/shared/table/DataPageHeader'

interface UserDataTableProps {
  data: UserDataProps
  columns: any
}

export function UserDataTable({ data, columns }: UserDataTableProps) {
  const [pagination, setPagination] = useState({ pageIndex: 1, pageSize: 10 })
  const { data: userData, totalData } = data

  const table = useReactTable({
    data: userData,
    columns,
    state: { pagination },
    pageCount: Math.ceil(totalData / pagination.pageSize),
    rowCount: totalData,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return (
    <div className='p-6'>
      <DataPageHeader title='awikwok' filter='awikwok' />
      <Table>
        <DataTableHeader table={table} />
        <DataTableBody table={table} columns={columns} />
      </Table>
      <DataTablePagination table={table} setPagination={setPagination} />
    </div>
  )
}
