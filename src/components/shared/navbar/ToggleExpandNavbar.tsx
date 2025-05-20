import { useSidebar } from '@/components/ui/sidebar'
import { ToggleButton } from '../button/button-toggle/toggleButton'

export function ToggleNavbar() {
  const { open, toggleSidebar } = useSidebar()
  const options = ['collapse', 'expand']

  return (
    <ToggleButton
      current={!!open ? 'collapse' : 'expand'}
      values={options}
      icons={{
        collapse: 'tabler:layout-sidebar-right-expand',
        expand: 'tabler:layout-sidebar-right-collapse'
      }}
      onChange={toggleSidebar}
    />
  )
}
