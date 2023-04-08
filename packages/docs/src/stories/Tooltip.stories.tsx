import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps, Button, Text } from '@sky-ui/core'

export default {
  title: 'Display/Tooltip',
  component: Tooltip,
  args: {
    delayDuration: 400,
    defaultOpen: false,
    trigger: <Button>Personalizar</Button>,
    content: (
      <div>
        <Text color="#000">Espaço reservado para o conteúdo em exibição </Text>
      </div>
    ),
  },

  argTypes: {
    delayDuration: {
      control: {
        type: 'number',
      },
    },
    open: { control: { type: 'boolean' } },
    defaultOpen: { control: { type: 'boolean' } },
  },
} as Meta<TooltipProps>

export const Default: StoryObj<TooltipProps> = {}
