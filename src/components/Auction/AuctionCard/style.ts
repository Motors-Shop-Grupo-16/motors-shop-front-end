import styled from "styled-components";

interface IAuctionCardProps {
  imageUrl: string;
}

const Container = styled.div<IAuctionCardProps>`
  display: flex;
  min-width: 735px;
  flex-direction: column;

  .auction-content {
    display: flex;
    flex-direction: column;
    max-width: 735px;
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.29) 0%,
        #000000 100%
      ),
      url(${(props) => props.imageUrl});
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;

    padding: 24px 36px;
    border-radius: 4px 4px 0px 0px;
    gap: 1rem;

    .auction-time {
      display: flex;
      max-width: 123px;
      align-items: center;
      border-radius: 32px;
      padding: 8px 8px;
      gap: 14px;
      margin-bottom: 50px;
      background: var(--color-whiteFixed);
    }

    .auction-description {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .auction-author {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .auction-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      .auction-info-year-mileage {
        display: flex;
        gap: 12px;

        .auction-info-year,
        .auction-info-mileage {
          display: flex;
          padding: 4px 8px;
          border-radius: 4px;
          background: var(--color-brand4);
        }
      }
    }

    @media (max-width: 755px) {
      padding: 33px 22px;

      .auction-info {
        flex-direction: column;
        align-items: start;
      }

      .auction-time {
        margin-bottom: 25px;
      }

      .auction-description {
        -webkit-line-clamp: 3;
        line-clamp: 3;
      }
    }
  }

  .auction-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 61px;
    border-radius: 0px 0px 4px 4px;
    background: var(--color-brand1);
    padding: 0px 36px;
    cursor: pointer;

    @media (max-width: 755px) {
      padding: 0px 22px;
    }
  }

  &:hover {
    .auction-content {
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.71) 0%,
          #000000 100%
        ),
        url(${(props) => props.imageUrl});
    }

    .auction-nav {
      background: var(--color-brand2);
    }
  }

  @media (max-width: 755px) {
    min-width: 300px;
  }
`;

export default Container;
