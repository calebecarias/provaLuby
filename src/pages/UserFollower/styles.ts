import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  svg {
    margin-right: 8px;
  }

  img {
    height: 115px;
    border-radius: 50%;
    border: 3px solid #fff;
    position: absolute;
    top: 68.5px;

    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 126px;
  padding-bottom: 65px;
  background-color: #1f1f1f;
  margin-bottom: 80px;

  h1 {
    font-size: 17px;
    position: absolute;
    top: 2.5%;
    left: 50%;
    transform: translateX(-50%);
  }

  a {
    display: flex;
    text-decoration: none;
    color: #fff;
    font-size: 17px;
    font-weight: lighter;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }

    svg {
      margin: 0 20px 0px 12px;
    }
  }
`;

export const Content = styled.div`
  margin: 0 0 25px 30px;
  padding-top: 8px;

  p {
    font-weight: lighter;
    font-size: 18px;
    line-height: 1.6;
  }

  &:last-child {
    padding-bottom: 100px;
  }
`;

export const MiddleContent = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 0 20px 0px 20px;
  background-color: #5252525d;
  margin-bottom: 25px;
  height: 97px;

  a {
    text-decoration: none;
    color: #fff;
  }

  h1 {
    font-size: 40px;
  }
  p {
    font-weight: lighter;
    font-size: 17px;
  }
`;
