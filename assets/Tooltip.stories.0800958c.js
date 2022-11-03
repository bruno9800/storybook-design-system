var i=Object.defineProperty;var n=(t,r)=>i(t,"name",{value:r,configurable:!0});import{e,f as p,g as l,A as a,h as T,T as s}from"./index.48edffe7.js";import{j as o,a as c}from"./jsx-runtime.161d1606.js";import"./index.8160d64c.js";import"./iframe.15804df5.js";import"./index.ce320007.js";const C={parameters:{storySource:{source:`import { ComponentStory, Meta } from '@storybook/react'
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
`,locationsMap:{primary:{startLoc:{col:49,line:23},endLoc:{col:1,line:36},startBody:{col:49,line:23},endBody:{col:1,line:36}}}}},title:"Feedback/Tooltip",component:e,args:{open:!0},argTypes:{open:{control:!1}}},d=n(t=>o(p,{children:c(e,{children:[o(l,{children:o(a,{})}),o(T,{children:o(s,{children:"Tooltip Example"})})]})}),"Templete"),m=d.bind({});m.args={open:!0,defaultOpen:!0,delayDuration:1e3};const v=["Primary"];export{m as Primary,v as __namedExportsOrder,C as default};
//# sourceMappingURL=Tooltip.stories.0800958c.js.map
