import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Button',
};

export default Story;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  children: 'purchase',
};
