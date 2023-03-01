import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 122px;
  background: var(--color-grey8);

  .form-small-inputs {
    display: flex;
    gap: 8px;
  }

  .selectContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    span {
      font-size: 12px;
      font-family: "Inter", sans-serif;
      font-weight: 500;
      color: var(--color-alert1);
    }
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