import {
  Content,
  Description,
  Title,
  ToastAction,
  ToastContainer,
  ToastViewport,
} from './styles'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description?: string
  absPosition?: 'bottomRight' | 'topRight' | 'topLeft' | 'bottomLeft'
  onClose: () => void
}

export function Toast({
  absPosition = 'bottomRight',
  title,
  description,
  onClose,
  ...props
}: ToastProps) {
  return (
    <ToastPrimitive.Provider>
      <ToastContainer {...props}>
        <Content>
          <Title>{title}</Title>
          {!!description && <Description>{description}</Description>}
        </Content>
        <ToastAction altText="Close" onClick={onClose}>
          <X />
        </ToastAction>
      </ToastContainer>
      <ToastViewport absPosition={absPosition} />
    </ToastPrimitive.Provider>
  )
}
