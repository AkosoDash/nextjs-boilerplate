'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function useThemeHook() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return {
    theme: mounted ? resolvedTheme : undefined,
    setTheme
  }
}
