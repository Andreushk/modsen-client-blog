import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import Label from './index';

type StoryProps = ComponentProps<typeof Label>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: 'UI/Label',
  component: Label,
};

export default meta;

export const Default: Story = {
  args: {
    children: 'Some label text',
  },
};
