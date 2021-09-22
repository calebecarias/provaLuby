import React from 'react';

import { Container, HighLight } from './styles';

interface TitleIndicatorProps {
  title: string;
  titleSize: number;
  image?: string;
  isTitleUppercase?: boolean;
}

const TitleIndicator: React.FC<TitleIndicatorProps> = ({
  title,
  image,
  titleSize,
  isTitleUppercase = false,
}) => (
  <>
    <Container h1size={titleSize} isTitleUppercase={isTitleUppercase}>
      <HighLight />
      {!!image && <img src={image} alt="avatar" />}
      <h1>{title}</h1>
    </Container>
  </>
);
export default TitleIndicator;
