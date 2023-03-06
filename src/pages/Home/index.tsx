import { useContext } from "react";
import { AuctionList } from "../../components/Auction/AuctionList";
import Footer from "../../components/Footer";
import ProductList from "../../components/Product/ProductList";
import { Slogan } from "../../components/Slogan";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { Heading } from "../../styles/typography";
import { Container, ContainerHomePage, ContainerListHome } from "./styles";

export const Home = () => {
  const { cars, motorcycles } = useContext(AnnouncementContext);

  return (
    <>
      <Slogan />
      <ContainerHomePage>
        <Container>
          <ContainerListHome className="home-auction">
            <Heading
              id="auction"
              className=""
              tag="h5"
              style="heading-5"
              weight="600"
              color="--color-grey1"
            >
              Leilão
            </Heading>

            <AuctionList />
          </ContainerListHome>

          <ContainerListHome>
            <Heading
              id="car"
              className=""
              tag="h5"
              style="heading-5"
              weight="600"
              color="--color-grey1"
            >
              Carros
            </Heading>

            <ProductList products={cars} />
          </ContainerListHome>

          <ContainerListHome>
            <Heading
              id="motorcycle"
              className=""
              tag="h5"
              style="heading-5"
              weight="600"
              color="--color-grey1"
            >
              Motos
            </Heading>

            <ProductList products={motorcycles} />
          </ContainerListHome>
        </Container>
        <Footer />
      </ContainerHomePage>
    </>
  );
};
