import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { BodyText, Heading } from "../../styles/typography";
import Button from "../Button";
import Modal from "../Modal";
import { Container } from "./style";

const DeleteAnnouncementModal = () => {
  const { setIsDeleteAnnouncement, announcementToDelete, deleteAnnouncement } =
    useContext(AnnouncementContext);

  return (
    <Modal title="Excluir anúncio" closeModal={setIsDeleteAnnouncement}>
      <Container>
        <Heading tag="p" style="heading-7" weight="500">
          Tem certeza que deseja remover este anúncio?
        </Heading>

        <BodyText tag="p" style="body-1">
          Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
          anúncio.
        </BodyText>

        <div className="buttonContainer">
          <Button
            type="button"
            width="fit-content"
            buttonText="Big"
            backgroundColor="--color-grey6"
            color="--color-grey2"
            borderColor="transparent"
            borderLength="0"
            onClick={() => setIsDeleteAnnouncement(false)}
          >
            Cancelar
          </Button>

          <Button
            type="button"
            width="fit-content"
            buttonText="Big"
            backgroundColor="--color-brand1"
            color="--color-whiteFixed"
            borderLength="0"
            borderColor="transparent"
            onClick={() => {
              deleteAnnouncement(announcementToDelete);
            }}
          >
            Sim, excluir anúncio
          </Button>
        </div>
      </Container>
    </Modal>
  );
};

export default DeleteAnnouncementModal;
