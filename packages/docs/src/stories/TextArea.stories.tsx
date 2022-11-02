import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Comentário</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Digite o comentário aqui',
  },
}

export const WithPrefix: StoryObj<TextAreaProps> = {
  args: {
    prefix: 'prefix.com/',
  },
}

export const WithDisabled: StoryObj<TextAreaProps> = {
  args: {
    prefix: 'prefix.com/',
    disabled: true,
  },
}
