import { flexRender, Row, Table } from '@tanstack/react-table'
import { TableBody, TableCell, TableRow } from '@/components/ui/table'

interface DataTableBodyProps<TData> {
  table: Table<TData>
  columns: any[]
}

export function DataTableBody<TData>({ table, columns }: DataTableBodyProps<TData>) {
  const rows = table.getRowModel().rows
  return (
    <TableBody>
      {rows.length ? (
        rows.map((row: Row<TData>) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
            {row.getVisibleCells().map(cell => (
              <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className='h-24 text-center'>
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  )
}
