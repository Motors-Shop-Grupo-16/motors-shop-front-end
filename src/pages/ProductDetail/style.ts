import styled from "styled-components";

export const Container = styled.div`
  animation: fadeIn 0.5s;

  .modalFigure {
    max-width: 466px;
    max-height: 239px;
    overflow: hidden;
    background-color: var(--color-grey7);
    display: flex;
    align-items: center;
    justify-content: center;

    .modalImage {
      width: 80%;
    }
  }

  .commentUpdateContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;

    .commentUpdateTextarea {
      resize: none;
      width: 100%;
      height: 130px;
      padding: 13px 16px;
      font-size: 16px;
      line-height: 26px;
      font-weight: 400;
      font-family: var(--font-family2);
      color: var(--color-grey3);
      border-radius: 4px;
      border: 1.5px solid var(--color-grey7);
    }

    .modalButtonsContainer {
      display: flex;
      gap: 10px;
      justify-content: flex-end;
    }
  }

  .sloganBackgorund {
    width: 100%;
    height: 436px;
    background-color: var(--color-brand1);
    z-index: -1;
    position: absolute;

    @media (min-width: 1262px) {
      height: 601px;
    }
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1262px;
    padding: 45px 12px 0;
    justify-content: center;

    @media (min-width: 1262px) {
      column-gap: 46px;
      justify-content: flex-start;
    }

    .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 752px;
      width: 100%;
      height: fit-content;

      .coverImageContainer {
        background-color: var(--color-grey10);
        height: 355px;
        width: 100%;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (min-width: 1262px) {
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

      .productInfoContainer {
        background-color: var(--color-grey10);
        max-height: 326.91px;
        width: 100%;
        border-radius: 4px;
        margin-top: 17px;
        display: flex;
        flex-direction: column;
        padding: 44px 24px 28px;

        @media (min-width: 425px) {
          padding: 44px 46.5px 28px;
          max-height: 239.39px;
        }

        @media (min-width: 1262px) {
          margin-top: 16px;
        }

        .productTitle {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .productInfo {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;

          .productInfoAlign {
            display: flex;
            flex-direction: column;
            gap: 32px;
            margin-top: 41px;

            @media (min-width: 425px) {
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            }

            .productNumbers {
              display: flex;
              gap: 12px;

              .productNumbersInfo {
                background-color: var(--color-brand4);
                border-radius: 4px;
                padding: 4px 8px;
              }
            }
          }

          .productButton {
            margin-top: 24px;
          }
        }
      }

      .productDescriptionContainer {
        width: 100%;
        background-color: var(--color-grey10);
        padding: 36px 28px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        margin-top: 24.09px;
        gap: 32px;

        @media (min-width: 1262px) {
          margin-top: 39.61px;
        }

        .productDescription {
          text-align: justify;
        }
      }
    }

    .aside {
      margin-top: 15px;
      max-width: 752px;
      width: 100%;

      @media (min-width: 1262px) {
        max-width: 440px;
        margin-top: 0;
      }

      .imagesContainer {
        max-height: 377px;
        width: 100%;
        background-color: var(--color-grey10);
        border-radius: 4px;
        padding: 36px 44px;
        display: flex;
        flex-direction: column;

        .imagesList {
          width: 100%;
          overflow-y: auto;
          display: flex;
          flex-wrap: wrap;
          column-gap: 5.5px;
          row-gap: 50px;
          margin-top: 32px;

          @media (min-width: 1262px) {
            gap: 14px;
            row-gap: 32px;
          }

          .imageItem {
            background-color: var(--color-grey7);
            width: 65px;
            height: 65px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border-radius: 4px;

            @media (min-width: 375px) {
              width: 90px;
              height: 90px;
            }

            @media (min-width: 1262px) {
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

      .userInfoContainer {
        background-color: var(--color-grey10);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 28px;
        margin-top: 52px;
        padding: 40px 28px;

        @media (min-width: 1262px) {
          margin-top: 34px;
        }

        .userInfoImage {
          width: 77px;
          height: 77px;
          font-size: 26.65px;
        }

        .userInfoDescription {
          text-align: justify;
        }
      }
    }

    .section {
      display: flex;
      flex-direction: column;
      max-width: 752px;
      width: 100%;

      .commentsContainer {
        width: 100%;
        background-color: var(--color-grey10);
        padding: 36px 28px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        margin-top: 18px;
        gap: 24px;

        @media (min-width: 1262px) {
          margin-top: 16px;
        }

        .noCommentsTitle {
          width: fit-content;
          text-align: center;
          margin: 30px 0 20px;
          color: var(--color-alert1);
        }
      }

      .createCommentContainer {
        width: 100%;
        background-color: var(--color-grey10);
        padding: 36px 26px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        margin-top: 42px;
        gap: 24px;

        @media (min-width: 1262px) {
          margin-top: 33px;
          gap: 15px;
        }

        .createCommentUserInfo {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .createCommentForm {
          display: flex;
          flex-direction: column;
          gap: 24px;

          .createCommentContent {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 24px;

            @media (min-width: 1262px) {
              border: 1.5px solid var(--color-grey7);
              flex-direction: row;
              align-items: flex-end;
            }

            .createCommentTextarea {
              resize: none;
              width: 100%;
              height: 128px;
              padding: 13px 16px;
              font-size: 16px;
              line-height: 26px;
              font-weight: 400;
              font-family: var(--font-family2);
              color: var(--color-grey3);
              border-radius: 4px;
              border: 1.5px solid var(--color-grey7);

              @media (min-width: 1262px) {
                width: 80%;
                border: none;
              }
            }

            .createCommentButton {
              height: fit-content;

              @media (min-width: 1262px) {
                margin-bottom: 13px;
              }
            }
          }

          .inputAuctionContainer {
            margin-top: 8px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            gap: 32px;

            @media (min-width: 540px) {
              gap: 8px;
            }

            .inputAuctionContent {
              .inputAuctionCreateComment {
                width: 315px;
                height: 40px;
                -moz-appearance: textfield;
                appearance: textfield;

                ::-webkit-inner-spin-button {
                  -webkit-appearance: none;
                }
              }
            }
            .createAuctionCommentButton {
              height: 40px;
            }
          }
        }

        .createCommentsSuggestionsContainer {
          display: flex;
          flex-wrap: wrap;
          column-gap: 8px;
          row-gap: 24px;

          .createCommentSuggestions {
            padding: 0 12px;
            font-weight: 500;
            font-size: 12px;
            line-height: 24px;
            font-family: var(--font-family2);
            color: var(--color3);
            background-color: var(--color-grey7);
            border-radius: 24px;
            cursor: pointer;
          }
        }
      }
    }
  }

  .footer {
    margin-top: 45px;
    @media (min-width: 1262px) {
      margin-top: 73px;
    }
    @media (min-height: 1800px) {
      position: fixed;
    }
  }
`;
