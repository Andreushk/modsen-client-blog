import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import FormElementsMessage from './index';

type StoryProps = ComponentProps<typeof FormElementsMessage>;

const meta: Meta<StoryProps> = {
  title: 'UI/FormElementsMessage',
  component: FormElementsMessage,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Some form message text',
  },
};
