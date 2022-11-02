import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Seu nome</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Digite seu nome',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'prefix.com/',
  },
}

export const WithDisabled: StoryObj<TextInputProps> = {
  args: {
    prefix: 'prefix.com/',
    disabled: true,
  },
}
