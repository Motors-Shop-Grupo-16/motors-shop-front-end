import { IModalProps } from "./interfaces";
import { MdClose } from "react-icons/md";
import { Container } from "./style";
import { Heading } from "../../styles/typography";

const Modal = ({ children, title }: IModalProps) => {
  const handleClick = () => {
    console.log("clicado");
  };

  return (
    <Container>
      <div className="modal">
        <div className="modalHeader">
          <Heading tag="h3" style="heading-7">
            {title}
          </Heading>
          <div className="modalCloseButton" onClick={handleClick}>
            <MdClose />
          </div>
        </div>
        {children}
      </div>
    </Container>
  );
};

export default Modal;
