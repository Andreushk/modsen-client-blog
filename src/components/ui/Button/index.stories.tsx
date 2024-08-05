import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import Button from './index';

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    styleType: {
      options: ['yellow', 'white'],
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    styleType: 'yellow',
    children: 'Click Me!',
  },
};

export const Secondary: Story = {
  args: {
    styleType: 'white',
    children: 'Click Me!',
  },
};
