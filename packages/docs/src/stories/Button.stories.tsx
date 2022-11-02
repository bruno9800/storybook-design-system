import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secundary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const primary: StoryObj<ButtonProps> = {}

export const primarySmall: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const secundary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secundary',
    size: 'md',
  },
}

export const tertiary: StoryObj = {
  args: {
    variant: 'tertiary',
  },
}

export const Disabled: StoryObj = {
  args: {
    variant: 'primary',
    disabled: true,
  },
}

export const WithIcon: StoryObj = {
  args: {
    children: (
      <>
        Próximo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}
