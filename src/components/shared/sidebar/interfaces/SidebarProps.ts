import { SidebarItem } from './SidebarItem'

export interface SidebarProps {
  isMobileOpen: boolean
  toggleMobileSidebar: () => void
  sidebarItems: SidebarItem[]
  pathname: string
}
