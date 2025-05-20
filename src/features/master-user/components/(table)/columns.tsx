'use client'

import { ColumnDef } from '@tanstack/react-table'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type Role = {
  id: string
  name: string
}

export type User = {
  id: string
  username: string
  email: string
  role: Role
}

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => {
      return (
        <button
          onClick={() => console.log(row)} // Access full user data
          className='bg-blue-500 text-white p-2 rounded'
        >
          Edit
        </button>
      )
    }
  }
]
