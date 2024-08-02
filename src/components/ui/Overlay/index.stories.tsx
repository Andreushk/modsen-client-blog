import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentProps } from 'react';

import Overlay from './index';

type StoryProps = ComponentProps<typeof Overlay>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: 'UI/Overlay',
  component: Overlay,
  argTypes: {
    isGoingToClose: {
      type: 'boolean',
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

export const Default: Story = {
  args: {
    isGoingToClose: false,
  },
};
