import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background: var(--color-grey8);

  form {
    margin-top: 122px;
    margin-bottom: 122px;
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
  }

  button {
    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 1600px) {
    .footer {
    position: relative;
    bottom: 0;
    left: 0;
  }
  }
`;
