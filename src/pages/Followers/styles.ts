import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  a {
    text-decoration: none;
  }

  div:last-child {
    border-bottom: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;

  width: 100%;
  height: 68px;
  background-color: #1f1f1f;

  margin-bottom: 25px;

  svg {
    margin-left: 20px;
  }

  h1 {
    font-size: 17px;
    margin-right: 50%;
    transform: translateX(50%);
    color: #fff;
  }
`;

export const Card = styled.div`
  border-bottom: 1px solid #7070705a;
  padding: 25px 0 25px 0;

  &:nth-child(2) {
    padding-top: 80px;
  }

  &:last-child {
    padding-bottom: 100px;
  }

  a {
    text-decoration: none;
  }

  svg {
    position: absolute;
    left: 90%;
    transform: translateY(-170%);
  }
`;
