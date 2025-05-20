import { Button } from '@/components/ui/button'

interface BasicButtonProps {
  children: React.ReactNode
  onClick: () => void
}

export const BasicButton = ({ children, onClick, ...props }: BasicButtonProps) => {
  return (
    <Button onClick={onClick} {...props}>
      {children}
    </Button>
  )
}
