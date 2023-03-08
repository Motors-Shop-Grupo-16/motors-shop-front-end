import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { BodyText, Heading } from "../../styles/typography";
import Button from "../Button";
import Modal from "../Modal";
import { Container } from "./style";

const DeleteUserModal = () => {
  const { setIsDeleteUser, deleteUser } = useContext(UserContext);

  return (
    <Modal title="Excluir conta" closeModal={setIsDeleteUser}>
      <Container>
        <Heading tag="p" style="heading-7" weight="500">
          Tem certeza que deseja remover sua conta?
        </Heading>

        <BodyText tag="p" style="body-1">
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta dos nossos servidores.
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
            onClick={() => setIsDeleteUser(false)}
          >
            Cancelar
          </Button>

          <Button
            type="button"
            width="fit-content"
            buttonText="Big"
            backgroundColor="--color-alert2"
            color="--color-alert1"
            borderLength="0"
            borderColor="transparent"
            onClick={() => {
              deleteUser();
            }}
          >
            Sim, excluir conta
          </Button>
        </div>
      </Container>
    </Modal>
  );
};

export default DeleteUserModal;
