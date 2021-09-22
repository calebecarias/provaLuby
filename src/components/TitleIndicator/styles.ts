import styled, { css } from 'styled-components';

interface H1Props {
  h1size: number;
  isTitleUppercase: boolean;
}

export const Container = styled.div<H1Props>`
  display: flex;
  align-items: center;

  overflow-x: hidden;
  word-break: break-all;

  img {
    height: 64px;
    border: 3px solid #fff;
    border-radius: 50%;
    margin-right: 20px;
  }

  h1 {
    color: #fff;
  }

  ${props => css`
    h1 {
      font-size: ${props.h1size}px;
    }
  `};

  ${props =>
    props.isTitleUppercase &&
    css`
      h1 {
        text-transform: uppercase;
      }
    `};
`;

export const HighLight = styled.div`
  float: left;
  background-color: #ffce00;
  border-radius: 0 20px 20px 0;
  height: 42px;
  width: 10px;
  margin-right: 20px;
`;
