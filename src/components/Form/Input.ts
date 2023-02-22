import styled from "styled-components";

export const Input = styled.input`
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
`;
