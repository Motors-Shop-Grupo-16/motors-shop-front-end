import Footer from "../../components/Footer";
import { Heading } from "../../styles/typography";
import { Container } from "./style";
// import imagem from "../../assets/"
export const Error404 = () => {
  return (
    <>
      <Container>
        <div className="titleError">
          <Heading
            className=""
            tag="h1"
            style="heading-1"
            weight="700"
            color="--color-grey0"
          >
            Page Not Found
          </Heading>

          <img src="" alt=""/>
        </div>

        <Footer />
      </Container>
    </>
  );
};
