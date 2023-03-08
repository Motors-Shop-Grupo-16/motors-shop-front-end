import styled from "styled-components";

export const Container = styled.div`
  animation: fadeIn 0.5s;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background: var(--color-grey8);

  .footer {
    @media (min-height: 1800px) {
      position: fixed;
    }
  }

  form {
    margin-top: 48px;
    margin-bottom: 97px;
  }

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
    /* gap: 60px; */
  }
`;
