import styled from "styled-components";

const Container = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 290px;
  gap: 16px;

  .productImageContainer {
    display: flex;

    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }

    justify-content: center;
    align-items: center;
    background-color: var(--color-grey7);
    border: 1px solid transparent;
    transition: 0.5s;
    height: 152px;
    max-width: 100%;

    img {
      width: 180px;
      transition: 0.5s;
    }
  }

  :hover {
    cursor: pointer;

    .productImageContainer {
      border-color: var(--color-brand1);
      transition: 0.5s;

      img {
        transform: scale(1.2);
        transition: 0.5s;
      }
    }
  }

  .productTitleContainer {
    width: 33ch;

    .productTitle {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .productDescriptionContainer {
    width: 90%;

    .productDescription {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  .productUserImageContainer {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .productInfoContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .productVehicleInfo {
      display: flex;
      align-items: center;
      gap: 12px;

      .productInfo {
        padding: 4px 8px;
        background-color: var(--color-brand4);
        border-radius: 4px;
      }
    }
  }
`;

export default Container;
