import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;

  img {
    height: 98px;
  }

  form {
    width: 340px;
    text-align: center;

    button {
      border-radius: 12px;
      height: 56px;
      width: 100%;
      color: #030202;
      font-weight: bold;
      border: 0;
      font-size: 20px;

      background: #ffce00;
      transition: background-color 0.2s;

      svg {
        margin-left: 8px;
        position: relative;
        top: 0.15em;
      }

      &:hover {
        background: ${shade(0.2, '#ffce00')};
      }
    }
  }
`;
