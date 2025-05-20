'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from '@/components/ui/select'
import { useRouter, useSearchParams } from 'next/navigation'

export function DataTablePagination({
  table,
  setPagination
}: {
  table: any
  setPagination: (update: (prev: any) => any) => void
}) {
  const searchParams = useSearchParams()
  const pagination = table.getState().pagination
  const totalData = table.getRowCount()
  const currentPage = parseInt(searchParams.get('page') || '1')
  const router = useRouter()
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Select
            onValueChange={value => {
              setPagination((prev: any) => ({ ...prev, pageSize: Number(value) }))
              router.push(`?page=1&limit=${Number(value)}`)
              table.setPageSize(Number(value))
            }}
            defaultValue={pagination.pageSize.toString()}
          >
            <SelectTrigger>
              <span className='text-sm mr-1.5'>Row per page :</span>
              <span className='font-semibold text-accent-foreground'>{pagination.pageSize}</span>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Rows per Page</SelectLabel>
                {[10, 25, 50, 100].map(size => (
                  <SelectItem key={size} value={size.toString()}>
                    {size}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </PaginationItem>
        <PaginationItem className='text-sm'>
          Page {(currentPage - 1) * pagination.pageSize + 1} -
          {Math.min(currentPage * pagination.pageSize, table.getRowCount())} of {table.getRowCount()} rows
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious
            currentPage={currentPage}
            pageSize={pagination.pageSize}
            setPagination={() => setPagination}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            currentPage={currentPage}
            pageSize={pagination.pageSize}
            totalData={totalData}
            setPagination={() => setPagination}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
