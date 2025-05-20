'use client'

interface SidebarOverlayProps {
  onClick: () => void
}

export default function SidebarOverlay({ onClick }: SidebarOverlayProps) {
  return <div className='md:hidden fixed inset-0 bg-background bg-opacity-50 z-30' onClick={onClick} />
}
