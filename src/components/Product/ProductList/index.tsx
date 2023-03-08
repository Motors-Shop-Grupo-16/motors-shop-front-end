import { IAnnouncement } from "../../../contexts/AnnouncementContext.interfaces";
import EmptyList from "../../EmptyList";
import ProductCard from "../ProductCard";

import { Container } from "./style";

const ProductList = ({
  products,
  viewButtons,
  isActive,
}: {
  products: IAnnouncement[];
  viewButtons?: boolean;
  isActive?: boolean;
}) => {
  return (
    <>
      {products.length == 0 ? (
        <EmptyList>
          No momento não temos esses veículos disponíveis para venda.
        </EmptyList>
      ) : (
        <Container>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              viewButtons={viewButtons}
              isActive={isActive}
            />
          ))}
        </Container>
      )}
    </>
  );
};

export default ProductList;
