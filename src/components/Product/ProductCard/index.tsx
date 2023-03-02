import { useContext } from "react";
import UserImage from "../../UserImage/userImage";

import { AnnouncementContext } from "../../../contexts/AnnouncementContext";
import { BodyText, Heading } from "../../../styles/typography";

import { IAnnouncement } from "../../../contexts/AnnouncementContext.interfaces";
import Container from "./style";

const ProductCard = ({ product }: { product: IAnnouncement }) => {
  const { goTo, listAnnouncementById } = useContext(AnnouncementContext);

  return (
    <Container
      onClick={() => {
        listAnnouncementById(product.id);
        goTo(`/product`);
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
        <UserImage classname="productUserImage" name={product.User.name} />

        <BodyText style="body-2" tag="p" weight="500">
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
          {Number(product.price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Heading>
      </div>
    </Container>
  );
};

export default ProductCard;
