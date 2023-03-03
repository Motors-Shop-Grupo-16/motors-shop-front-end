import styled from "styled-components";

export const Container = styled.div`
  .sloganBackgorund {
    width: 100%;
    height: 436px;
    background-color: var(--color-brand1);
    z-index: -1;
    position: absolute;

    @media (min-width: 1231px) {
      height: 601px;
    }
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 45px 12px 0;
    gap: 15px;

    .main {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 752px;
      width: 100%;

      .coverImageContainer {
        background-color: var(--color-grey10);
        height: 355px;
        width: 100%;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (min-width: 1231px) {
          height: 377px;
        }

        .coverImageFigure {
          max-width: 441px;
          max-height: 252.96px;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          .coverImage {
            width: 100%;
          }
        }
      }
    }

    .aside {
      max-width: 752px;
      width: 100%;

      @media (min-width: 1231px) {
        max-width: 440px;
      }

      .imagesContainer {
        height: 377px;
        background-color: var(--color-grey10);
        border-radius: 4px;
        padding: 36px 44px;
        display: flex;
        flex-direction: column;

        .imagesList {
          overflow-y: scroll;
          display: flex;
          flex-wrap: wrap;
          gap: 5.5px;
          margin-top: 32px;

          .imageItem {
            background-color: var(--color-grey7);
            width: 90px;
            height: 90px;
            display: flex;
            justify-content: center;
            align-items: center;

            @media (min-width: 1231px) {
              width: 108px;
              height: 108px;
            }

            .imageContainer {
              max-width: 90%;
              width: 100%;

              .image {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
`;
