import { IAnnouncement } from "../../../contexts/AnnouncementContext";
import ProductCard from "../ProductCard";
import { IProducts } from "../ProductCard/interfaces";

import Container from "./style";

import { arrExample } from "./tempData";

const ProductList = ({ products }: { products: IAnnouncement[] }) => {
  return (
    <>
      {products.length && (
        <Container>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Container>
      )}
    </>
  );
};

export default ProductList;
