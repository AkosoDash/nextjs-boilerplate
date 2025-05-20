'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ToggleIcon } from './toggleIcon'
import { type ToggleButtonProps } from './interfaces/toggle-button-props'

export function ToggleButton({ current, values, icons, onChange }: ToggleButtonProps) {
  const handleClick = () => {
    const currentIndex = values.indexOf(current)
    const nextIndex = (currentIndex + 1) % values.length
    const nextValue = values[nextIndex]
    onChange(nextValue)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      key={current}
    >
      <Button
        variant='ghost'
        size='icon'
        className='relative overflow-hidden rounded-full border-2 border-transparent bg-background/80 backdrop-blur-sm transition-all hover:scale-105 hover:border-primary/20 hover:bg-background/100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-100 dark:hover:border-primary/30 dark:bg-background/80 dark:hover:bg-background/100'
        onClick={handleClick}
        aria-label='Toggle button'
      >
        <ToggleIcon current={current} icons={icons} />
        <span className='sr-only'>Toggle</span>
      </Button>
    </motion.div>
  )
}
