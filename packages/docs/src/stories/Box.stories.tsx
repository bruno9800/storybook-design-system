import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Button, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando Box</Text>
        <Button>Clique</Button>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

export const Secundary: StoryObj<BoxProps> = {
  args: {
    content: 'fit',
  },
}
