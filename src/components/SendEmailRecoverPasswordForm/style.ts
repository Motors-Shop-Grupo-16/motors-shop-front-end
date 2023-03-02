import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 24px;

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

  .submitButtonContainer {
    display: flex;
    align-self: flex-end;
    margin-top: 16px;
    gap: 8px;
  }
`;
