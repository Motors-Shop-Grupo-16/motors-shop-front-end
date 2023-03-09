import styled, { css } from "styled-components";

const Container = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  color: var(--color-whiteFixed);
  font-family: var(--font-family2);
  font-weight: 500;
  font-size: 14px;

  ${({ color }) => css`
    background-color: var(${`--color-random${color}`});
  `}
`;

export default Container;
