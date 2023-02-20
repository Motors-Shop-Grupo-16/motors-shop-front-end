import styled from "styled-components";

const Container = styled.ul`
  display: flex;
  overflow-x: scroll;
  align-items: center;
  gap: 24px;

  ::-webkit-scrollbar {
    /* display: none; */
  }

  @media (max-width: 755px) {
    gap: 8px;
  }
`;

export default Container;