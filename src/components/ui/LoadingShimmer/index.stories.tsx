import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import LoadingShimmer from './index';

type StoryProps = ComponentProps<typeof LoadingShimmer>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  title: 'UI/LoadingShimmer',
  component: LoadingShimmer,
};

export default meta;

export const Default: Story = {
  render: () => (
    <div style={{ width: '150px', height: '100px' }}>
      <LoadingShimmer />
    </div>
  ),
};
