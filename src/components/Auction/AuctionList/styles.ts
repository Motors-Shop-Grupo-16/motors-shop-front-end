import styled from "styled-components";

export const StyledAuctionList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 24px;
  // Remover depois que adicionar os outros componentes na página
  margin-left: 0.6rem;
  ::-webkit-scrollbar {
    /* display: none; */
  }

  @media (max-width: 755px) {
    gap: 8px;
  }
`;
