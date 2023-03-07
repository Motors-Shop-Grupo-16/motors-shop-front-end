import { useContext } from "react";
import UserImage from "../../UserImage/userImage";

import { AnnouncementContext } from "../../../contexts/AnnouncementContext";
import { BodyText, Heading } from "../../../styles/typography";

import { IAnnouncement } from "../../../contexts/AnnouncementContext.interfaces";
import { Container } from "./style";
import Button from "../../Button";

const ProductCard = ({
  product,
  viewButtons,
}: {
  product: IAnnouncement;
  viewButtons?: boolean;
}) => {
  const {
    goTo,
    listAnnouncementById,
    setIsUpdateAnnouncement,
    setAnnouncement,
  } = useContext(AnnouncementContext);

  return (
    <Container>
      <div
        className="productContentContainer"
        onClick={() => {
          goTo(`/product?announcement=${product.id}`);
        }}
      >
        <div className="productImageContainer">
          <img src={product.coverImage} alt={product.title} />
        </div>

        <div className="productTitleContainer">
          <Heading
            style="heading-7"
            className="productTitle"
            tag="p"
            weight="600"
          >
            {product.title}
          </Heading>
        </div>

        <div className="productDescriptionContainer">
          <BodyText style="body-2" className="productDescription" tag="p">
            {product.description}
          </BodyText>
        </div>

        <div className="productUserImageContainer">
          <UserImage className="productUserImage" name={product.User.name} />

          <BodyText
            className="productUserName"
            style="body-2"
            tag="p"
            weight="500"
          >
            {product.User.name}
          </BodyText>
        </div>

        <div className="productInfoContainer">
          <div className="productVehicleInfo">
            <BodyText
              className="productInfo"
              style="body-2"
              tag="p"
              weight="500"
              color="--color-brand1"
            >
              {product.mileage} KM
            </BodyText>

            <BodyText
              className="productInfo"
              style="body-2"
              tag="p"
              weight="500"
              color="--color-brand1"
            >
              {product.year}
            </BodyText>
          </div>

          <Heading style="heading-7" className="productPrice" tag="p">
            {`R$ ${product.price}`}
          </Heading>
        </div>
      </div>
      {viewButtons && (
        <div className="productButtonsContainer">
          <Button
            type="button"
            width="fit-content"
            buttonText=""
            backgroundColor="--color-grey8"
            color="--color-grey1"
            borderColor="--color-grey1"
            borderLength="2px"
            onClick={() => {
              setAnnouncement(product);
              setIsUpdateAnnouncement(true);
            }}
          >
            Editar
          </Button>

          <Button
            type="button"
            width="fit-content"
            buttonText=""
            backgroundColor="--color-grey8"
            color="--color-grey1"
            borderColor="--color-grey1"
            borderLength="2px"
            onClick={() => {
              listAnnouncementById(product.id);
              goTo(`/product?announcement=${product.id}`);
            }}
          >
            Ver como
          </Button>
        </div>
      )}
    </Container>
  );
};

export default ProductCard;
