interface IGlobalContextProps {
  user: UserProps
  setUser: (user: UserProps) => void
}

interface UserProps {
  name: string
  age: int
  birthPlace: string
}

export { IGlobalContextProps, UserProps }
