import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import Spinner from './index';

type StoryProps = ComponentProps<typeof Spinner>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: 'UI/Spinner',
  component: Spinner,
};

export default meta;

export const Default: Story = {
  args: {},
};
