import ProductCard from "../ProductCard";

import Container from "./style";

import { arrExample } from "./tempData";

const ProductList = () => {
  return (
    <>
      {arrExample.length && (
        <Container>
          {arrExample.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Container>
      )}
    </>
  );
};

export default ProductList;
