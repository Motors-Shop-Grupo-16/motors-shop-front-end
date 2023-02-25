import { BodyText, Heading } from "../../styles/typography";
import Button from "../Button";
import { Container } from "./style";

export const Slogan = () => {
  return (
    <Container>
      <div className="slogan-content">
        <Heading
          className="auction-title"
          tag="h1"
          style="heading-1"
          weight="700"
          color="--color-grey10"
        >
          Velocidade e experiência em um lugar feito para você
        </Heading>

        <BodyText tag="p" style="body1" color="--color-grey9" weight="400">
          Um ambiente feito para você explorar o seu melhor
        </BodyText>

        <div className="slogan-buttons">
          <a href="#car">
            <Button
              buttonText="Big"
              backgroundColor="--color-brand2"
              borderColor="--color-grey10"
              borderLength="1.5px"
              color="--color-grey10"
            >
              Carros
            </Button>
          </a>
          <a href="#motorcycle">
            <Button
              buttonText="Big"
              backgroundColor="--color-brand2"
              borderColor="--color-grey10"
              borderLength="1.5px"
              color="--color-grey10"
            >
              Motos
            </Button>
          </a>
        </div>
      </div>
    </Container>
  );
};
