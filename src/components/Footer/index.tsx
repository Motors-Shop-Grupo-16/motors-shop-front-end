import { Container } from "./style";
import logo from "../../assets/footerLogo.svg";
import angleUpPng from "../../assets/angle-up.svg";
import { BodyText } from "../../styles/typography";

const Footer = () => {
  return (
    <Container className="footer">
      <div className="footer-content">
        <img src={logo} alt="Motors Shop logo" />
        <BodyText tag="p" style="body-2" weight="400" color="--color-whiteFixed">
          © 2022 - Todos os direitos reservados.
        </BodyText>
        <a href="#">
          <img src={angleUpPng} alt="Imagem - voltar para o topo" />
        </a>
      </div>
    </Container>
  );
};

export default Footer;
