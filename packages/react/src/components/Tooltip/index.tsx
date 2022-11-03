import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import {
  TooltipArrow,
  TooltipStyledContent,
  TooltipStyledTrigger,
} from './styles'

export interface TooltipProps
  extends ComponentProps<typeof TooltipPrimitive.Root> {}

export function Tooltip({ children, ...props }: TooltipProps) {
  return <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>
}

export interface TooltipContentProps
  extends ComponentProps<typeof TooltipPrimitive.Content> {}

export function TooltipContent({ children, ...props }: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipStyledContent {...props}>
        {children}
        <TooltipArrow />
      </TooltipStyledContent>
    </TooltipPrimitive.Portal>
  )
}

export const TooltipTrigger = TooltipStyledTrigger
TooltipTrigger.displayName = 'TooltipTrigger'
export const TooltipProvider = TooltipPrimitive.Provider
TooltipProvider.displayName = 'TooltipProvider'
