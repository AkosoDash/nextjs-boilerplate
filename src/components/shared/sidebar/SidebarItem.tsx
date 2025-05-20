'use client'

import Link from 'next/link'
import { SidebarMenuItem, SidebarMenuButton, useSidebar } from '@/components/ui/sidebar'
import { cn } from '@/libs'

interface SidebarItemProps {
  item: {
    title: string
    url: string
    icon: React.ReactNode
  }
  pathname: string
}

export default function SidebarItem({ item, pathname }: SidebarItemProps) {
  const isActive = pathname === item.url
  const { setOpenMobile } = useSidebar()
  return (
    <SidebarMenuItem className='p-0'>
      <SidebarMenuButton
        asChild
        className={cn(
          `${isActive ? 'bg-primary text-accent' : 'bg-sidebar'} 
           w-full text-lg font-bold rounded-none h-16 p-4 transition-all duration-300 ease-in-out`
        )}
      >
        <Link href={item.url} className='flex items-center gap-2' onClick={() => setOpenMobile(false)}>
          <span>{item.icon}</span>
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
