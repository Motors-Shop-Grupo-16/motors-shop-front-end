import { useContext } from "react";
import { AuctionList } from "../../components/Auction/AuctionList";
import { PageContainer } from "../../components/PageContainer";
import ProductList from "../../components/Product/ProductList";
import { AnnouncementContext } from "../../contexts/Annoucement";
import { Heading } from "../../styles/typography";
import { Container } from "./styles";
import Footer from "../../components/Footer";

export const Home = () => {
  const { cars, motorcycles } = useContext(AnnouncementContext);
  return (
    <>
      <Container>
        <PageContainer>
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
        </PageContainer>

        <PageContainer>
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
        </PageContainer>

        <PageContainer>
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
        </PageContainer>
      </Container>
      <Footer />
    </>
  );
};
