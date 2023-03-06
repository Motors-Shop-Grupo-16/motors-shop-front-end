import styled from "styled-components";

export const Container = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  min-height: 100vh;
  padding: 80px 16px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3; */

  display: block;
  justify-content: center;
  align-items: center;
  padding: 80px 8px;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);

  .containerModal {
    display: flex;
    justify-content: center;
    align-items: center;
  }

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
