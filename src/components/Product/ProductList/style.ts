import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  overflow-x: scroll;
  align-items: center;
  gap: 12px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Container;
