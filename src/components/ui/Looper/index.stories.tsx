import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import Looper from './index';

type StoryProps = ComponentProps<typeof Looper>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: 'UI/Looper',
  component: Looper,
  argTypes: {
    speed: {
      type: 'number',
    },
    direction: {
      options: ['left', 'right'],
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    direction: 'left',
    speed: 35,
    children: [
      <p>Some content inside this looper component</p>,
      <p>Some content inside this looper component</p>,
      <p>Some content inside this looper component</p>,
    ],
  },
};
