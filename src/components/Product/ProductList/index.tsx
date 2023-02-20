import ProductCard from "../ProductCard";

import car from "/car.png";

import Container from "./style";

const ProductList = () => {
  const arrExample = [
    {
      id: "1",
      title:
        "Product title stays here - max 1 lineProduct title stays here - max 1 line",
      typeSale: "Sell",
      year: "2019",
      mileage: "0",
      price: "0",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      typeVehicle: "car",
      coverImage: car,
      isActive: true,
      images: [
        { id: "1", url: car },
        { id: "2", url: car },
      ],
      user: {
        id: "1",
        name: "Sidarta Oliveira",
        email: "sid@gmail.com",
        cpf: "12312312321",
        phone: "+12 (12) 12345-1234",
        dateOfBirth: "12/12/12",
        isAdvertiser: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    },
    {
      id: "2",
      title:
        "Product title stays here - max 1 lineProduct title stays here - max 1 line",
      typeSale: "Sell",
      year: "2019",
      mileage: "0",
      price: "0",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      typeVehicle: "car",
      coverImage: car,
      isActive: true,
      images: [
        { id: "1", url: car },
        { id: "2", url: car },
      ],
      user: {
        id: "1",
        name: "Sidarta Oliveira",
        email: "sid@gmail.com",
        cpf: "12312312321",
        phone: "+12 (12) 12345-1234",
        dateOfBirth: "12/12/12",
        isAdvertiser: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    },
  ];

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
