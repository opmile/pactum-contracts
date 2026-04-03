import { cn } from '@/lib/utils'

export function SignatureDivider({ className }: { className?: string }) {
  return <div className={cn('h-0.5 w-6 bg-primary', className)} />
}
