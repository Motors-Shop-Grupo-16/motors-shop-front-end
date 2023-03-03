import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

import Loading from "../../components/Loading";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

import { Container } from "./style";
import { Heading } from "../../styles/typography";

export const ProductDetail = () => {
  const { detailedAnnouncement, loading } = useContext(AnnouncementContext);

  if (loading) return <Loading />;

  if (!detailedAnnouncement) return <Navigate to={"/"} />;

  return (
    <Container>
      <Navbar />

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
                <li key={image.id} className="imageItem">
                  <figure className="imageContainer">
                    <img src={image.url} alt={`Image ${i}`} className="image" />
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* <Footer /> */}
    </Container>
  );
};
