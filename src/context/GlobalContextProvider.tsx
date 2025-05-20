import { createContext, useState, type ReactNode } from 'react'
import { type IGlobalContextProps, type UserProps } from '@/interfaces/global-context'

// Create the context
export const GlobalContext = createContext<IGlobalContextProps>({
  user: { name: '', age: undefined, birthPlace: '' },
  setUser: () => {}
})

// Create the provider
export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<UserProps>({
    name: 'Abimanyu',
    age: 22,
    birthPlace: 'Surabaya'
  })

  const value = {
    user: currentUser,
    setUser: setCurrentUser
  }

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}
