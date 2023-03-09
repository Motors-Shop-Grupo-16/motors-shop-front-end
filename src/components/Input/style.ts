import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 8px;

  input {
    padding: 8px 16px;
    width: 100%;
    border: 1.5px solid var(--color-grey8);
    border-radius: 4px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    color: var(--color-grey3);

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

  span {
    font-size: 12px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    color: var(--color-alert1);
    position: absolute;
    top: 64px;
  }
`;
