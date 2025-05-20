'use client'

import { motion } from 'framer-motion'
import IconifyIcon from '@/components/shared/icon'
import { type ToggleIconProps } from './interfaces/toggle-icon-props'

export function ToggleIcon({ current, icons }: ToggleIconProps) {
  return (
    <>
      {Object.entries(icons).map(([value, icon]) => {
        return (
          <motion.div
            key={value}
            className='absolute inset-0 flex items-center justify-center'
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{
              rotate: current === value ? 0 : 90,
              scale: current === value ? 1 : 0,
              opacity: current === value ? 1 : 0,
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20
              }
            }}
            exit={{ opacity: 0 }}
          >
            <IconifyIcon icon={icon} className='size-5 text-foreground' />
          </motion.div>
        )
      })}
    </>
  )
}
