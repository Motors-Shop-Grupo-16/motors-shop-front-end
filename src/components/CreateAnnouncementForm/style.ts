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
    gap: 16px;
  }

  .submitButtonContainer {
    display: flex;
    align-self: flex-end;
    margin-top: 16px;
    gap: 8px;
  }
`;
