'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu
} from '@/components/ui/sidebar'
import { cn } from '@/libs'
import { useSidebarHook } from './hooks/use-sidebar-hook'
import SidebarHeader from './SidebarHeader'
import SidebarItem from './SidebarItem'
import SidebarOverlay from './SidebarOverlay'

/**
 * Custom Sidebar for dashboard layout
 */
export default function DashboardSidebar() {
  const { isMobileOpen, sidebarItems, pathname, toggleMobileSidebar } = useSidebarHook()

  return (
    <>
      <Sidebar
        className={cn(`
          transition-all duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
          fixed
          top-0
          left-0
          z-40
          md:w-64 w-64
          h-screen
          overflow-y-auto
          bg-primary
        `)}
      >
        <SidebarContent>
          <SidebarGroup>
            <SidebarHeader />
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarItems.map(item => (
                  <SidebarItem key={item.title} item={item} pathname={pathname} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {isMobileOpen && <SidebarOverlay onClick={toggleMobileSidebar} />}
    </>
  )
}
