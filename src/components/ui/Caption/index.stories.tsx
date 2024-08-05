import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import Caption from './index';

type StoryProps = ComponentProps<typeof Caption>;

const meta: Meta<StoryProps> = {
  title: 'UI/Caption',
  component: Caption,
  argTypes: {
    style: {
      options: ['light', 'dark'],
      control: {
        type: 'radio',
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    style: 'dark',
    bolded: false,
    children: 'Some caption component text',
  },
};

export const Bolded: Story = {
  args: {
    style: 'dark',
    bolded: true,
    children: 'Some bolded caption component text',
  },
};

export const Light: Story = {
  args: {
    style: 'light',
    bolded: true,
    children: 'Some bolded and light caption component text',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
