import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

const Story: ComponentMeta<typeof Input> = {
  component: Input,
  title: 'Input',
};

export default Story;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'how many chickens?',
  hint: 'You probably have more chickens that you may first think!',
  placeholder: '10,000',
  error: '',
};


export const TextArea = Template.bind({});
TextArea.args = {
  label: 'how much do you like chickens?',
  hint: '',
  placeholder: 'Chickens in Minecraft are the best thing since...',
  isTextArea: true,
  error: '',
};
