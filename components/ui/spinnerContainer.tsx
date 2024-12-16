import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import { Spinner } from './spinner'

interface SpinnerContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
  fullScreen?: boolean
}

export function SpinnerContainer({
  size = 'md',
  fullScreen = false,
  className,
  ...props
}: SpinnerContainerProps) {
  return (
    <div
      className={cn(
        'flex h-full w-full items-center justify-center',
        fullScreen && 'fixed inset-0 bg-background/80',
        className
      )}
      {...props}
    >
      <Spinner size={size} />
    </div>
  )
}
