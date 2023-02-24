import styled from "styled-components";

export const Select = styled.select`
  border: none;
  overflow: hidden;
  ::-moz-focus-inner {
    border: 0;
  }
  :focus {
    outline: none;
  }

  height: 48px;
  width: 100%;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;

  option {
    width: calc((100% - 8px) / 2);
    padding: 12px 0;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    color: var(--color-grey0);
    border: var(--color-grey3) solid 2px;
    border-radius: 4px;

    :first-of-type {
      margin-right: 8px;
    }

    :checked {
      background-color: var(--color-brand1);
      color: var(--color-whiteFixed);
      border: transparent solid 2px;
    }
  }
`;
