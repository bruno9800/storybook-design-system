import { ComponentStory, Meta } from '@storybook/react'
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipProps,
  TooltipTrigger,
  Text,
  Avatar,
} from '@ignite-ui/react'

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  args: {
    open: true,
  },
  argTypes: {
    open: { control: false },
  },
} as Meta<TooltipProps>

const Templete: ComponentStory<typeof Tooltip> = (args) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Avatar />
        </TooltipTrigger>
        <TooltipContent>
          <Text>Tooltip Example</Text>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export const Primary = Templete.bind({})
Primary.args = {
  open: true,
  defaultOpen: true,
  delayDuration: 1000,
}
/**
 * <Tooltip open={true}>
        <TooltipContent sideOffset={5}>
          <Text>adasd</Text>
        </TooltipContent>
      </Tooltip>
 */
