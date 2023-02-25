import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  min-height: 100vh;
  padding: 16px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 520px;
    padding: 16px;
    border-radius: 8px;
    gap: 24px;
    background-color: var(--color-whiteFixed);
  }

  .modalHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .modalCloseButton {
    cursor: pointer;
  }
`;
