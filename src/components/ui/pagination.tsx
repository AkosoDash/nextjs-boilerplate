import * as React from 'react'

import { cn } from '@/libs/helper/tailwind/combine-tailwind-classes'
import { Button, buttonVariants } from '@/components/ui/button'
import IconifyIcon from '../shared/icon'
import Link from 'next/link'
import { usePaginationLink } from '../shared/table/helper/use-pagination-link'
import { useRouter } from 'next/navigation'
import { cursorTo } from 'node:readline'

function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      role='navigation'
      aria-label='pagination'
      data-slot='pagination'
      className={cn('mx-auto flex w-full justify-end border border-t-2 p-1', className)}
      {...props}
    />
  )
}

function PaginationContent({ className, ...props }: React.ComponentProps<'ul'>) {
  return <ul data-slot='pagination-content' className={cn('flex flex-row items-center gap-1', className)} {...props} />
}

function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
  return <li data-slot='pagination-item' {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
  disabled?: boolean
} & Pick<React.ComponentProps<typeof Button>, 'size'> &
  React.ComponentProps<'a'>

function PaginationLink({ className, isActive, disabled, size = 'icon', children, ...props }: PaginationLinkProps) {
  return (
    <Link
      href={''}
      aria-current={isActive ? 'page' : undefined}
      data-slot='pagination-link'
      data-active={isActive}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
      passHref={disabled}
      className={cn(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size
        }),
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

function PaginationPrevious({
  pageSize,
  className,
  currentPage,
  setPagination,
  ...props
}: {
  pageSize: number
  className?: string
  currentPage: number
  setPagination: (fn: (prev: { pageIndex: number }) => { pageIndex: number }) => void
  props?: React.ComponentProps<typeof PaginationLink>
}) {
  const previousPage = currentPage > 1 ? currentPage - 1 : 1
  const isDisabled = currentPage === 1
  const href = usePaginationLink(previousPage, pageSize)

  const handleClick = (e: React.MouseEvent) => {
    if (isDisabled) {
      e.preventDefault()
      return
    }
    setPagination(prev => ({ ...prev, pageIndex: previousPage }))
  }

  return (
    <PaginationLink
      aria-label='Go to previous page'
      disabled={isDisabled}
      size='default'
      className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
      href={isDisabled ? '#' : href}
      onClick={handleClick}
      {...props}
    >
      <IconifyIcon icon={'material-symbols:chevron-left-rounded'} />
    </PaginationLink>
  )
}

function PaginationNext({
  pageSize,
  className,
  totalData,
  currentPage,
  setPagination,
  ...props
}: {
  pageSize: number
  className?: string
  currentPage: number
  totalData: number
  setPagination: (fn: (next: { pageIndex: number }) => { pageIndex: number }) => void
  props?: React.ComponentProps<typeof PaginationLink>
}) {
  const maxPage = Math.ceil(totalData / pageSize)
  const nextPage = currentPage < maxPage ? currentPage + 1 : currentPage
  const isDisabled = currentPage === maxPage
  const href = usePaginationLink(nextPage, pageSize)
  const handleClick = (e: React.MouseEvent) => {
    if (isDisabled) {
      e.preventDefault()
      return
    }
    setPagination(next => ({ ...next, pageIndex: nextPage }))
  }

  return (
    <PaginationLink
      aria-label='Go to next page'
      size='default'
      className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
      href={isDisabled ? '#' : href}
      onClick={handleClick}
      {...props}
    >
      <IconifyIcon icon={'material-symbols:chevron-right-rounded'} />
    </PaginationLink>
  )
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      data-slot='pagination-ellipsis'
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <IconifyIcon icon={'mdi:dots-horizontal'} className='size-4' />
      <span className='sr-only'>More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis
}
