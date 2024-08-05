import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import Paragraph from './index';

type StoryProps = ComponentProps<typeof Paragraph>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: 'UI/Paragraph',
  component: Paragraph,
  argTypes: {
    children: {
      type: 'string',
    },
    small: {
      type: 'boolean',
    },
    style: {
      options: ['light', 'grayed', 'dark'],
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;

export const Dark: Story = {
  args: {
    style: 'dark',
    children: 'Some paragraph text here',
  },
};

export const Grayed: Story = {
  args: {
    style: 'grayed',
    children: 'Some paragraph text here',
  },
};

export const Light: Story = {
  args: {
    style: 'light',
    children: 'Some paragraph text here',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Small: Story = {
  args: {
    style: 'dark',
    small: true,
    children: 'Some paragraph text here',
  },
};
