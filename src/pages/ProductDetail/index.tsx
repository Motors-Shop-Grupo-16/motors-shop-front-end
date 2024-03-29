import { useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { UserContext } from "../../contexts/UserContext";

import Button from "../../components/Button";
import CommentList from "../../components/Comments/CommentList";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import UserImage from "../../components/UserImage/userImage";
import Input from "../../components/Input";

import { splitName } from "../../utils/createImage";

import { IComment } from "../../contexts/AnnouncementContext.interfaces";
import { IModalData } from "./interfaces";

import { BodyText, Heading } from "../../styles/typography";
import { Container } from "./style";
import { currencyMask } from "../../masks";

export const ProductDetail = () => {
  const {
    detailedAnnouncement,
    createComment,
    detailedAnnouncementModal,
    setDetailedAnnouncementModal,
    goTo,
    updateComment,
    deleteComment,
    commentModal,
    setCommentModal,
    listAnnouncementById,
  } = useContext(AnnouncementContext);

  const { token, user } = useContext(UserContext);
  const [commentData, setCommentData] = useState<string>("");
  const [lanceData, setLanceData] = useState<string>("0,00");
  const [modalDataImage, setModalDataImage] = useState<IModalData | null>(null);
  const [modalData, setModalData] = useState<IComment | undefined>(undefined);
  const [commentUpdateData, setCommentUpdateData] = useState<string>("");
  const [lanceUpdateData, setLanceUpdateData] = useState<string>("");

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const announcementId = useQuery().get("announcement");

  useEffect(() => {
    listAnnouncementById(announcementId!);
  }, [commentModal, detailedAnnouncementModal]);

  return (
    <>
      <Container>
        {detailedAnnouncement ? (
          <>
            {detailedAnnouncementModal && (
              <Modal
                title="Imagem do veículo"
                closeModal={() => setDetailedAnnouncementModal(false)}
              >
                <figure className="modalFigure">
                  <img
                    src={modalDataImage!.url}
                    alt={`Image ${modalDataImage!.i}`}
                    className="modalImage"
                  />
                </figure>
              </Modal>
            )}

            {commentModal && (
              <Modal
                key={modalData!.id}
                title={`Editar ${
                  detailedAnnouncement.typeSale === "sale"
                    ? "Comentário"
                    : "Lance"
                }`}
                closeModal={() => setCommentModal(false)}
              >
                <div className="commentUpdateContainer">
                  {detailedAnnouncement.typeSale === "sale" ? (
                    <textarea
                      className="commentUpdateTextarea"
                      value={commentUpdateData}
                      placeholder={modalData!.content}
                      onChange={(e) => setCommentUpdateData(e.target.value)}
                    />
                  ) : (
                    <Input
                      label="Lance"
                      className="inputAuctionCreateComment"
                      placeholder="Inserir valor do lance"
                      type="text"
                      min="1"
                      value={currencyMask(lanceUpdateData)}
                      onChange={(event) =>
                        setLanceUpdateData(event.target.value)
                      }
                    />
                  )}
                  <div className="modalButtonsContainer">
                    <Button
                      width="108px"
                      backgroundColor="--color-alert2"
                      borderColor="--color-alert2"
                      borderLength="1.5px"
                      color="--color-alert1"
                      onClick={() => deleteComment(modalData!.id)}
                    >
                      Excluir
                    </Button>

                    <Button
                      width="108px"
                      backgroundColor="--color-brand1"
                      borderColor="--color-brand1"
                      borderLength="1.5px"
                      color="--color-whiteFixed"
                      onClick={() => {
                        detailedAnnouncement.typeSale === "sale"
                          ? updateComment(modalData!.id, {
                              content: commentUpdateData,
                            })
                          : updateComment(modalData!.id, {
                              content: lanceUpdateData,
                            });
                      }}
                    >
                      Editar
                    </Button>
                  </div>
                </div>
              </Modal>
            )}

            <div className="sloganBackgorund" />

            <div className="container">
              <main className="main">
                <div className="coverImageContainer">
                  <figure className="coverImageFigure">
                    <img
                      className="coverImage"
                      src={detailedAnnouncement.coverImage}
                      alt={detailedAnnouncement.title}
                    />
                  </figure>
                </div>

                <div className="productInfoContainer">
                  <Heading
                    style="heading-6"
                    tag="h3"
                    color="--color-grey1"
                    className="productTitle"
                  >
                    {detailedAnnouncement.title}
                  </Heading>

                  <div className="productInfo">
                    <div className="productInfoAlign">
                      <div className="productNumbers">
                        <BodyText
                          className="productNumbersInfo"
                          style="body-2"
                          tag="p"
                          weight="500"
                          color="--color-brand1"
                        >
                          {detailedAnnouncement.year}
                        </BodyText>

                        <BodyText
                          className="productNumbersInfo"
                          style="body-2"
                          tag="p"
                          weight="500"
                          color="--color-brand1"
                        >
                          {detailedAnnouncement.mileage} KM
                        </BodyText>
                      </div>

                      <Heading
                        style="heading-7"
                        className="productPrice"
                        tag="p"
                      >
                        {`R$ ${detailedAnnouncement.price}`}
                      </Heading>
                    </div>
                    {user?.id !== detailedAnnouncement.User.id &&
                      detailedAnnouncement.typeSale === "sale" && (
                        <Button
                          width="100px"
                          backgroundColor="--color-brand1"
                          borderLength="1.5"
                          borderColor="--color-brand1"
                          color="--color-whiteFixed"
                          className="productButton"
                          logged={!Boolean(token)}
                          onClick={() =>
                            user
                              ? window.open(
                                  `https://wa.me/+${detailedAnnouncement.User.phone.replace(
                                    /[\D]/g,
                                    ""
                                  )}`,
                                  "_blank"
                                )
                              : goTo("/login")
                          }
                        >
                          Comprar
                        </Button>
                      )}
                  </div>
                </div>

                <div className="productDescriptionContainer">
                  <Heading
                    style="heading-6"
                    tag="h3"
                    color="--color-grey1"
                    className="productDescriptionTitle"
                  >
                    Descrição
                  </Heading>

                  <BodyText
                    className="productDescription"
                    style="body-1"
                    tag="p"
                    color="--color-grey2"
                  >
                    {detailedAnnouncement.description}
                  </BodyText>
                </div>
              </main>

              <aside className="aside">
                <div className="imagesContainer">
                  <Heading
                    style="heading-6"
                    tag="h3"
                    color="--color-grey1"
                    className="imageTitle"
                  >
                    Fotos
                  </Heading>

                  <ul className="imagesList">
                    {detailedAnnouncement.images.map((image, i) => (
                      <li
                        key={image.id}
                        className="imageItem"
                        onClick={() => {
                          setDetailedAnnouncementModal(true);
                          setModalDataImage({ ...image, i });
                        }}
                      >
                        <figure className="imageContainer">
                          <img
                            src={image.url}
                            alt={`Image ${i}`}
                            className="image"
                          />
                        </figure>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="userInfoContainer">
                  <UserImage
                    name={detailedAnnouncement.User.name}
                    className="userInfoImage"
                  />

                  <Heading
                    style="heading-6"
                    tag="h3"
                    color="--color-grey1"
                    className="userInfoName"
                  >
                    {splitName(detailedAnnouncement.User.name)}
                  </Heading>

                  <BodyText
                    className="userInfoDescription"
                    style="body-1"
                    tag="p"
                    weight="400"
                    color="--color-grey2"
                  >
                    {detailedAnnouncement.User.description}
                  </BodyText>

                  <Button
                    width="206px"
                    backgroundColor="--color-grey0"
                    borderColor="--color-grey0"
                    borderLength="1.5px"
                    color="--color-whiteFixed"
                    onClick={() => {
                      goTo(`/advertiser?user=${detailedAnnouncement.User.id}`);
                    }}
                  >
                    Ver todos anuncios
                  </Button>
                </div>
              </aside>

              <section className="section">
                <div className="commentsContainer">
                  <Heading
                    style="heading-6"
                    tag="h3"
                    color="--color-grey1"
                    className="productDescriptionTitle"
                  >
                    {detailedAnnouncement.typeSale === "sale"
                      ? "Comentários"
                      : "Lances"}
                  </Heading>

                  {detailedAnnouncement.comments.length ? (
                    <CommentList
                      setModalData={setModalData}
                      setCommentUpdateData={setCommentUpdateData}
                      setLanceUpdateData={setLanceUpdateData}
                    />
                  ) : (
                    <BodyText
                      className="noCommentsTitle"
                      style="body-1"
                      tag="p"
                      weight="500"
                      color="--color-grey1"
                    >
                      {`Não existem ${
                        detailedAnnouncement.typeSale === "sale"
                          ? "Comentários"
                          : "Lances"
                      } no momento.`}
                    </BodyText>
                  )}
                </div>

                {user?.id === detailedAnnouncement.User.id &&
                detailedAnnouncement.typeSale === "auction" ? (
                  <></>
                ) : (
                  <div className="createCommentContainer">
                    {user && (
                      <div className="createCommentUserInfo">
                        <UserImage name={user.name} className="userInfoImage" />

                        <BodyText
                          className="userInfoName"
                          style="body-2"
                          tag="p"
                          weight="500"
                          color="--color-grey1"
                        >
                          {splitName(user.name)}
                        </BodyText>
                      </div>
                    )}

                    <div className="createCommentForm">
                      {detailedAnnouncement.typeSale === "sale" ? (
                        <div className="createCommentContent">
                          <textarea
                            className="createCommentTextarea"
                            placeholder="Digitar comentário"
                            onChange={(e) => setCommentData(e.target.value)}
                            value={commentData}
                          />

                          <Button
                            className="createCommentButton"
                            width="108px"
                            borderColor="--color-brand1"
                            borderLength="1.5px"
                            color="--color-whiteFixed"
                            backgroundColor="--color-brand1"
                            logged={!Boolean(token)}
                            onClick={() => {
                              if (Boolean(token)) {
                                if (commentData !== "") {
                                  createComment(
                                    { content: commentData },
                                    detailedAnnouncement.id
                                  );
                                  setCommentData("");
                                }
                              } else {
                                goTo("/login");
                              }
                            }}
                          >
                            Comentar
                          </Button>
                        </div>
                      ) : (
                        <div className="inputAuctionContainer">
                          <div className="inputAuctionContent">
                            <Input
                              label="Lance"
                              className="inputAuctionCreateComment"
                              placeholder="Inserir valor do lance"
                              type="text"
                              min="1"
                              value={currencyMask(lanceData)}
                              onChange={(event) =>
                                setLanceData(event.target.value)
                              }
                            />
                          </div>

                          <Button
                            className="createAuctionCommentButton"
                            width="fit-content"
                            borderColor="--color-brand1"
                            borderLength="1.5px"
                            color="--color-whiteFixed"
                            backgroundColor="--color-brand1"
                            logged={!Boolean(token)}
                            onClick={() => {
                              if (Boolean(token)) {
                                if (lanceData !== "") {
                                  createComment(
                                    { content: lanceData },
                                    detailedAnnouncement.id
                                  );
                                  setLanceData("0");
                                }
                              } else {
                                goTo("/login");
                              }
                            }}
                          >
                            Inserir proposta
                          </Button>
                        </div>
                      )}
                    </div>

                    {detailedAnnouncement.typeSale === "sale" && (
                      <div className="createCommentsSuggestionsContainer">
                        <button
                          className="createCommentSuggestions"
                          onClick={() => setCommentData("Gostei muito!")}
                        >
                          Gostei muito!
                        </button>
                        <button
                          className="createCommentSuggestions"
                          onClick={() => setCommentData("Incrível")}
                        >
                          Incrível
                        </button>
                        <button
                          className="createCommentSuggestions"
                          onClick={() =>
                            setCommentData("Recomendarei para meus amigos!")
                          }
                        >
                          Recomendarei para meus amigos!
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </section>
            </div>

            <Footer />
          </>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};
