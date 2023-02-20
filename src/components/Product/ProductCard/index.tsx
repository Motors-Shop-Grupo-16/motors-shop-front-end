import UserImage from "../../UserImage/userImage";

import { IProducts } from "./interface";

import Container from "./style";

const ProductCard = ({ product }: { product: IProducts }) => {
  return (
    <Container>
      <div className="productImageContainer">
        <img src={product.coverImage} alt={product.title} />
      </div>

      <div className="productTitleContainer">
        <strong className="productTitle">{product.title}</strong>
      </div>

      <p className="productDescription">{product.description}</p>

      <div className="productUserImageContainer">
        <UserImage classname="productUserImage" name={product.user.name} />

        <p className="productUserName">{product.user.name}</p>
      </div>

      <div className="productVehicleInfoContainer">
        <div className="productVehicleInfo">
          <span className="productMileage">{product.mileage} KM</span>

          <span className="productYear">{product.year}</span>
        </div>

        <b className="productPrice">
          {Number(product.price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </b>
      </div>
    </Container>
  );
};

export default ProductCard;
