import { ToggleButton } from '../button/button-toggle/toggleButton'
import { useThemeHook } from './hooks/use-theme-hook'

export function ToggleTheme() {
  const { theme, setTheme } = useThemeHook()

  return (
    <ToggleButton
      current={theme ?? 'dark'}
      values={['light', 'dark']}
      icons={{
        light: 'tabler:sun',
        dark: 'solar:moon-bold'
      }}
      onChange={setTheme}
    />
  )
}
