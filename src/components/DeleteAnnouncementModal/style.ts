import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 24px;

  .buttonContainer {
    display: flex;
    align-self: flex-end;
    margin-top: 16px;
    gap: 8px;
  }
`;
