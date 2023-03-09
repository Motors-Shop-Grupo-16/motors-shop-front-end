import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  overflow-x: scroll;
  align-items: center;
  gap: 24px;
  padding-bottom: 8px;

  @media (max-width: 755px) {
    gap: 8px;
  }
`;

export default Container;
