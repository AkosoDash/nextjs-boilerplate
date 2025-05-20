'use client'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navbar'
import { useGlobalContext } from '@/context'
import { ToggleNavbar } from './ToggleExpandNavbar'
import { ToggleTheme } from './ToggleTheme'

export default function DashboardNavbar() {
  // const { navbarState, setNavbarState } =
  const { user } = useGlobalContext()
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className='w-9'>
          <ToggleNavbar />
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem>
          <ToggleTheme />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='font-semibold'>Selamat Datang, {user.name}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-full gap-1 p-2 min-w-[16rem]'>
              <li>
                <NavigationMenuLink href='#'>Feature 1</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href='#'>Feature 2</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
