import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { UserContext } from "../../contexts/UserContext";

import Loading from "../../components/Loading";
import Navbar from "../../components/NavBar";
import UserImage from "../../components/UserImage/userImage";
import CommentList from "../../components/Comments/CommentList";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Footer from "../../components/Footer";

import { splitName } from "../../utils/createImage";

import { Container } from "./style";
import { BodyText, Heading } from "../../styles/typography";

export const ProductDetail = () => {
  const {
    detailedAnnouncement,
    loading,
    createComment,
    detailedAnnouncementModal,
    setDetailedAnnouncementModal,
  } = useContext(AnnouncementContext);

  const { token, user } = useContext(UserContext);

  if (loading) return <Loading />;

  if (!detailedAnnouncement) return <Navigate to={"/"} />;

  const [commentData, setCommentData] = useState<string>("");

  return (
    <>
      <Navbar />

      <Container>
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

                  <Heading style="heading-7" className="productPrice" tag="p">
                    {Number(detailedAnnouncement.price).toLocaleString(
                      "pt-BR",
                      {
                        style: "currency",
                        currency: "BRL",
                      }
                    )}
                  </Heading>
                </div>

                <Button
                  width="100px"
                  backgroundColor="--color-brand1"
                  borderLength="1.5"
                  borderColor="--color-brand1"
                  color="--color-whiteFixed"
                  className="productButton"
                >
                  <a
                    href={`https://wa.me/${detailedAnnouncement.User.phone}`}
                    className="buttonLink"
                    target="_blank"
                  >
                    Comprar
                  </a>
                </Button>
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
                  <>
                    <li
                      key={image.id}
                      className="imageItem"
                      onClick={() => setDetailedAnnouncementModal(true)}
                    >
                      <figure className="imageContainer">
                        <img
                          src={image.url}
                          alt={`Image ${i}`}
                          className="image"
                        />
                      </figure>
                    </li>
                    {detailedAnnouncementModal && (
                      <Modal
                        title="Imagem do veículo"
                        closeModal={() => setDetailedAnnouncementModal(false)}
                      >
                        <figure className="modalFigure">
                          <img
                            src={image.url}
                            alt={`Image ${i}`}
                            className="modalImage"
                          />
                        </figure>
                      </Modal>
                    )}
                  </>
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
                Comentários
              </Heading>

              {detailedAnnouncement!.comments.length ? (
                <CommentList />
              ) : (
                <BodyText
                  className="noCommentsTitle"
                  style="body-1"
                  tag="p"
                  weight="500"
                  color="--color-grey1"
                >
                  Não existem Comentários no momento.
                </BodyText>
              )}
            </div>

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
                    disabled={!Boolean(token)}
                    onClick={() => {
                      createComment(
                        { content: commentData },
                        detailedAnnouncement.id
                      );
                      setCommentData("");
                    }}
                  >
                    Comentar
                  </Button>
                </div>
              </div>

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
            </div>
          </section>
        </div>
      </Container>

      <Footer />
    </>
  );
};
