import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { styled } from '../../styles'
import { Box } from '../Box'

export const TooltipStyledContent = styled(TooltipPrimitive.Content, Box, {
  border: 0,
})

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray800',
})

export const TooltipStyledTrigger = styled(TooltipPrimitive.Trigger, {
  backgroundColor: 'transparent',
  border: 0,
  cursor: 'pointer',
})
