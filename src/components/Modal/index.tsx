import { IModalProps } from "./interfaces";
import { MdClose } from "react-icons/md";
import { Container } from "./style";
import { Heading } from "../../styles/typography";

const Modal = ({ children, title, closeModal }: IModalProps) => {
  return (
    <Container>
      <div className="containerModal">
        <div className="modal">
          <div className="modalHeader">
            <Heading tag="h3" style="heading-7">
              {title}
            </Heading>
            <div className="modalCloseButton" onClick={() => closeModal(false)}>
              <MdClose />
            </div>
          </div>
          {children}
        </div>
      </div>
    </Container>
  );
};

export default Modal;
