import IconifyIcon from '../../icon'
import { type SidebarItem } from '../interfaces/SidebarItem'

export const sidebarItems: SidebarItem[] = [
  {
    title: 'Home',
    url: '/home',
    icon: <IconifyIcon icon='mdi:home' />
  },
  {
    title: 'Role',
    url: '/role',
    icon: <IconifyIcon icon='lucide:user-cog' />
  },
  {
    title: 'User Management',
    url: '/user',
    icon: <IconifyIcon icon='ph:users-three' />
  },
  {
    title: 'Privilege',
    url: '/privilege',
    icon: <IconifyIcon icon='ph:user-list-bold' />
  },
  {
    title: 'Profile',
    url: '/profile',
    icon: <IconifyIcon icon='prime:user-edit' />
  }
]
