import { IAnnouncement } from "../../../contexts/AnnouncementContext.interfaces";
import ProductCard from "../ProductCard";

import { Container } from "./style";

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
