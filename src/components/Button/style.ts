import styled, { css } from "styled-components";

import { IButtonConfig } from "./interfaces";

const Container = styled.button<IButtonConfig>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  cursor: pointer;
  border-radius: 4px;

  font-family: var(--font-family1);
  font-weight: 600;
  color: var(${({ color }) => (color ? color : "--color-grey2")});

  ${({ buttonText }) =>
    buttonText === "Big"
      ? css`
          font-size: 16px;
        `
      : css`
          font-size: 14px;
        `};

  width: ${({ width }) => (width ? width : "100%")};

  background-color: var(
    ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : "--color-whiteFixed"}
  );

  ${({ borderColor, borderLength }) =>
    borderColor && borderLength
      ? css`
          border: ${borderLength} solid ${borderColor};
        `
      : css`
          border: 1.5px solid var(--color-grey2);
        `}
`;

export default Container;
