'use client'

import { ThemeProvider, GlobalContextProvider } from '@/context'
import { SidebarProvider } from '@/components/ui/sidebar'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <GlobalContextProvider>
      <ThemeProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </ThemeProvider>
    </GlobalContextProvider>
  )
}
