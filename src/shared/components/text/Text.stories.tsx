import type { ComponentStory, ComponentMeta } from '@storybook/react';

import {Heading, Paragraph, SubTitle, Text, Title} from "./Text";

const Story: ComponentMeta<typeof Title> = {
  component: Title,
  title: 'Typography',
};

export default Story;

const Template: ComponentStory<typeof Title> = () => (
  <div>
    <div>
      <Title>h1. Heading</Title>
    </div>
    <div>
      <SubTitle>h2. Heading</SubTitle>
    </div>
    <div>
      <Heading>h3. Heading</Heading>
    </div>
    <div>
      <Text>span. General Text</Text>
    </div>
    <div>
      <Paragraph>p. Paragraphs</Paragraph>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta ipsum et ante varius finibus. Sed magna tellus, dignissim eget venenatis a, tempus quis libero. Sed eu ligula et dui gravida varius. Sed eget pretium augue. Cras nec tristique eros. Integer ipsum libero, vulputate sit amet dui vel, luctus semper sem. Nulla lacinia augue quis sem dictum pellentesque ut sed justo. Quisque fermentum felis a ligula feugiat, lacinia tempor magna volutpat. Morbi dapibus nisl at urna laoreet, sit amet commodo elit pulvinar. </Paragraph>
      <Paragraph>Aliquam mattis porttitor pretium. Vestibulum ante diam, tincidunt ac tortor a, aliquam commodo lacus. Nulla nec velit quis lectus blandit placerat. Sed vestibulum, lectus id lobortis vulputate, nulla nibh lobortis odio, et semper justo diam nec ante. Pellentesque id dui ut augue ornare convallis vel id magna. Nunc sit amet quam elit. Nulla eget felis mauris. Curabitur blandit sit amet quam a dictum. Integer ornare justo tempus, faucibus sem scelerisque, condimentum justo. Morbi vitae augue id libero cursus scelerisque et non lacus. </Paragraph>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
