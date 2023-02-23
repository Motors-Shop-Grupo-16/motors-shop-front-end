import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;

  textarea {
    padding: 8px 16px;
    width: 100%;
    border: 1.5px solid var(--color-grey8);
    border-radius: 4px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    color: var(--color-grey3);
    resize: none;

    &:hover {
      background-color: var(--color-grey8);
    }

    &:focus-visible {
      background-color: var(--color-grey9);
      outline: 1.5px solid var(--color-brand2);
    }
  }

  label {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: var(--color-grey1);
  }
`;
