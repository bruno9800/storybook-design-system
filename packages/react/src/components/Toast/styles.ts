import { keyframes, styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'
import { Box } from '../Box'
import { Text } from '../Text'
import { Heading } from '../Heading'

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  listStyle: 'none',
  zIndex: 9999,

  variants: {
    absPosition: {
      topLeft: {
        top: '$8',
        left: '$8',
      },
      topRight: {
        top: '$8',
        right: '$8',
      },
      bottomLeft: {
        bottom: '$8',
        left: '$8',
      },
      bottomRight: {
        bottom: '$8',
        right: '$8',
      },
    },
  },

  defaultVariants: {
    absPosition: 'bottomRight',
  },
})

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

const fadeOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

export const ToastContainer = styled(Toast.Root, Box, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  minWidth: 300,

  '&[data-state="open"]': {
    animation: `${fadeIn} ease-in 400ms`,
  },
  '&[data-state="false"]': {
    animation: `${fadeOut} ease-in 400ms`,
  },
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
})

export const Title = styled(Toast.Title, Heading, {
  fontWeight: '$bold',
  defaultVariants: {
    size: 'sm',
  },
})

export const Description = styled(Toast.Description, Text, {
  color: '$gray200',
  defaultVariants: {
    size: 'sm',
  },
})

export const ToastAction = styled(Toast.Action, {
  background: 'transparent',
  lineHeight: 0,
  border: 0,

  width: '$5',
  height: '$5',

  cursor: 'pointer',
  svg: {
    width: '$5',
    height: '$5',
    color: '$gray200',
  },
})
