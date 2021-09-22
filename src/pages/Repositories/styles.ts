import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  a {
    text-decoration: none;
  }

  div:last-child {
    border-bottom: 0;
  }
  p {
    word-wrap: break-word;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  position: fixed;

  width: 100%;
  height: 68px;
  background-color: #1f1f1f;

  margin-bottom: 100px;
  color: #fff;

  svg {
    margin-left: 20px;
    transition: color 0.2;
    color: #fff;
  }

  h1 {
    font-size: 17px;
    margin-right: 50%;
    transform: translateX(50%);
    color: #fff;
  }
`;

export const Card = styled.div`
  margin-right: 16px;

  svg {
    margin-right: 8px;

    /* LockIcon */
    &:nth-child(3) {
      position: absolute;
      margin-left: 70%;
    }

    /* ForkIcon */
    &:nth-child(4) {
      position: absolute;
      margin-left: 80%;
    }
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  border-bottom: 1px solid #7070705a;
  padding: 25px 0 25px 0;

  &:nth-child(2) {
    padding-top: 80px;
  }

  &:last-child {
    padding-bottom: 100px;
  }
`;

export const CardContainer = styled.div`
  margin-left: 30px;
  p {
    font-size: 15px;
    font-weight: lighter;
    max-width: 80%;
    line-height: 1.6;
  }
  div {
    margin: 8px 30px 0 0;
    display: flex;
  }
`;
