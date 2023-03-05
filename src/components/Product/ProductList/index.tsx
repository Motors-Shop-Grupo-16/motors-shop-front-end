import { IAnnouncement } from "../../../contexts/AnnouncementContext.interfaces";
import EmptyList from "../../EmptyList";
import ProductCard from "../ProductCard";

import { Container } from "./style";

const ProductList = ({ products }: { products: IAnnouncement[] }) => {
  return (
    <>
      {products.length == 0 ? (
        <EmptyList>
          No momento não temos esses veículos disponíveis para venda.
        </EmptyList>
      ) : (
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
