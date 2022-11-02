import { Heading, HeadingProps } from '@ignite-ui/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem Header',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      control: 'inline-radio',
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'h1 Lorem Header',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por Padrão o heading sempre será um `h2`, mas podemos alterar a tag com a propriedade `as`',
      },
    },
  },
}
