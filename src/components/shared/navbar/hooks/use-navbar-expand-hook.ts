// src/components/shared/toggle-button/hooks/useNavbarExpandHook.ts
'use client'

import { useState } from 'react'

export function useNavbarExpandHook() {
  const [navbarState, setNavbarState] = useState<'expanded' | 'collapsed'>('expanded')

  const toggleNavbar = () => {
    setNavbarState(prev => (prev === 'expanded' ? 'collapsed' : 'expanded'))
  }

  return { navbarState, setNavbarState, toggleNavbar }
}
