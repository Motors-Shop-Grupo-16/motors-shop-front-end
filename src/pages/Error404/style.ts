import styled from "styled-components";

export const Container = styled.div`
  animation: fadeIn 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;

  .footer {
    @media (min-height: 1800px) {
      position: fixed;
    }
  }

  .titleError {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80vh;
  }
`;
