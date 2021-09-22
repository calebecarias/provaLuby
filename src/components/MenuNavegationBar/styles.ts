import styled, { css } from 'styled-components';

interface ContainerProps {
  path: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;

  justify-content: space-between;
  background-color: #fff;
  align-items: center;
  text-align: center;

  height: 80px;

  margin-top: 50px;
  border-radius: 10px 10px 0 0;
  padding: 0 15px 0 15px;

  svg {
    color: #a5a5a5;
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: 15px;
    color: #969696;
    font-weight: medium;
  }

  ${props =>
    props.path === '/user' &&
    css`
    a:nth-child(1) {
      svg {
        color: #000000;
      }
      p {
        color: #3e3e3e;
      }
    `}
  ${props =>
    props.path === '/repos' &&
    css`
    a:nth-child(2) {
      svg {
        color: #000000;
      }
      p {
        color: #3e3e3e;
      }
    `}
  ${props =>
    props.path === '/followers' &&
    css`
    a:nth-child(3) {
      svg {
        color: #000000;
      }
      p {
        color: #3e3e3e;
      }
    `}
  ${props =>
    props.path === '/following' &&
    css`
    a:nth-child(4) {
      svg {
        color: #000000;
      }
      p {
        color: #3e3e3e;
      }
    `}
`;
