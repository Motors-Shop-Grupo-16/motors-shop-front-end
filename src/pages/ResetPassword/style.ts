import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  gap: 122px;
  background: var(--color-grey8);
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

  @media (max-width: 755px) {
    gap: 60px;
  }
`;
