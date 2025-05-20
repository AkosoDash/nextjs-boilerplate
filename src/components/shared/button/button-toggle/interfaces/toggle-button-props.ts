export interface ToggleButtonProps {
  current: string
  values: string[]
  icons: Record<string, string>
  onChange: (value: string) => void
}
