import { useContext } from 'react'

import { GlobalContext } from './GlobalContextProvider'
import { GlobalContextProvider } from './GlobalContextProvider'
import { ThemeProvider } from './ThemeProvider'

const useGlobalContext = () => useContext(GlobalContext)
export { useGlobalContext, GlobalContextProvider, ThemeProvider }
