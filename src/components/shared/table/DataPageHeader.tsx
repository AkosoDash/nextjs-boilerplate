import { Button } from '@/components/ui/button'
import { BasicButton } from '../button/button-basic/basicButton'

export function DataPageHeader({ title, filter }: { title: string; filter: string }) {
  return (
    <div className='flex flex-row items-center justify-between'>
      <div className='font-bold text-2xl capitalize'>{title}</div>
      <BasicButton onClick={() => console.log('awikwok')}>aowkaowkaowkoakwoakw</BasicButton>
    </div>
  )
}
