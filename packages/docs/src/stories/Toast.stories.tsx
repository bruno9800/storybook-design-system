import { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    open: false,
    title: 'Toast exemple',
    absPosition: 'bottomRight',
    duration: 5000,
  },
  argTypes: {
    onClose: {
      action: 'close',
    },
    absPosition: {
      options: ['bottomRight', 'bottomLeft', 'topRight', 'topLeft'],
      control: 'inline-radio',
    },
    description: {
      control: {
        type: 'text',
      },
    },
    open: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const Secundary: StoryObj<ToastProps> = {
  args: {
    title: 'Data marcada',
    description: new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'full',
      timeStyle: 'short',
    }).format(new Date()),
  },
}
