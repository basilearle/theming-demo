import React, { useState} from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

import {AppTheme} from "../shared/theme";
import {AppStyles} from "../shared/styling/GlobalStyles";
import {Heading, Paragraph, SubTitle, Text, Title} from "../shared/components/text/Text";
import {Button} from '../shared/components/button';
import {Gutter} from "../shared/components/spacing/Spacing";
import Input from "../shared/components/input/Input";
import {useAppThemeCustomStyles} from "../shared/theme/AppThemeCustoms";

import CodeBlock from "./code-block/CodeBlock";

import {
  StyledAppLayout,
  StyledDrawerLayout,
  StyledResultLayout
} from "./App.styled";



export const App: React.FC = function () {
  const { setCustomInputStyles } = useAppThemeCustomStyles();

  const [ wantsDeathMode, setWantsDeathMode ] = useState(false);
  const [ customInput, setCustomInput ] = useState('');

  const onApplyEnhancements = () => {
    setCustomInputStyles(customInput);
  };

  return (
    <StyledAppLayout>
      <AppStyles />
      <StyledDrawerLayout>
        <AppTheme>
          <Heading>Choose your theme!</Heading>

          <Button variant="accent" onClick={() => setWantsDeathMode(false)}>Dark mode</Button>
          <Button variant="accent" onClick={() => setWantsDeathMode(true)}>Death mode</Button>

          <Gutter />

          <Heading>Enhance the Inputs!</Heading>
          <CodeEditor
            value={customInput}
            language="javascript"
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder="make it purdy..."
            padding={15}
            style={{
              fontSize: '1.75rem',
              height: '40rem',
              backgroundColor: "#efefef",
              color: '#4c4b63',
              fontFamily: 'ui-monospace',
              letterSpacing: '2.5px',
              borderRadius: '1rem',
            }}
          />
          <Gutter />
          <Button variant="accent" onClick={onApplyEnhancements}>Apply Enhancements</Button>
        </AppTheme>
      </StyledDrawerLayout>
      <StyledResultLayout>
        <AppTheme theme={wantsDeathMode ? 'dark' : 'default'}>
          <SubTitle>Theme Payload,</SubTitle>

          <CodeBlock />

          <SubTitle>Current Theme Representation,</SubTitle>
          <Heading>Buttons</Heading>

          <Button>Button One!</Button>
          <Button variant="primary">Button Two!</Button>
          <Button variant="accent">Button Three!</Button>

          <Heading>Inputs</Heading>

          <Input label="email" />
          <Input label="message" isTextArea={true} />

          <Heading>Text</Heading>

          <Title>h1. Heading</Title>
          <SubTitle>h2. Heading</SubTitle>
          <Heading>h3. Heading</Heading>
          <Text>span. General Text</Text>
          <Paragraph>p. Paragraphs</Paragraph>
        </AppTheme>
      </StyledResultLayout>
    </StyledAppLayout>
  );
}

export default App;
