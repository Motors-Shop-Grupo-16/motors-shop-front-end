import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  overflow-x: scroll;
  align-items: center;
  gap: 12px;
  padding-bottom: 10px;

  @media (min-width: 755px) {
    gap: 48px;
  }
`;
