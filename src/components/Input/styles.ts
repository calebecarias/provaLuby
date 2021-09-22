import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 12px;
  width: 100%;
  height: 56px;
  padding: 8px;

  border: 2px solid #292929;
  color: #535353;
  background-color: #fff;
  display: flex;
  align-items: center;

  margin: 40px 0 15px 0;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ffce00;
      border-color: #ffce00;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ffce00;
    `}


  input {
    background-color: transparent;
    flex: 1;
    border: none;
    font-size: 20px;

    &::placeholder {
      font-weight: regular;
      color: #535353;
      font-size: 20px;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  margin-right: 16px;
  svg {
    margin: 0;
  }

  span {
    background-color: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
