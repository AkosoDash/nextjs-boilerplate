'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { sidebarItems } from '../constants/sidebar-items'

export function useSidebarHook() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileSidebar = () => {
    setIsMobileOpen(prev => !prev)
  }

  return {
    isMobileOpen,
    toggleMobileSidebar,
    sidebarItems,
    pathname
  }
}
