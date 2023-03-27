import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${props => props.theme.typography.title.fontSize};
  font-weight: ${props => props.theme.typography.title.fontWeight};
  margin-bottom: 4rem;
`;

export const SubTitle = styled.h2`
  font-size: ${props => props.theme.typography.subtitle.fontSize};
  font-weight: ${props => props.theme.typography.subtitle.fontWeight};
  margin-bottom: 3rem;
`;

export const Heading = styled.h3`
  font-size: ${props => props.theme.typography.heading.fontSize};
  font-weight: ${props => props.theme.typography.heading.fontWeight};
  margin-bottom: 2rem;
`;

export const Text = styled.span`
  display: block;
  font-size: ${props => props.theme.typography.text.fontSize};
  font-weight: ${props => props.theme.typography.text.fontWeight};
  margin-bottom: .5rem;
`;

export const Paragraph = styled.p`
  font-size: ${props => props.theme.typography.paragraph.fontSize};
  font-weight: ${props => props.theme.typography.paragraph.fontWeight};
  line-height: 2.5rem;
  margin-bottom: 1.75rem;
`;
