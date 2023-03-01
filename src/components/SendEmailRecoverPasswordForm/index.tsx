import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { sendEmailRecoverSchema } from "../../validators/sendEmailRecoverSchema";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import { Container } from "./style";
import { ISendEmail } from "../../contexts/UserContext.interfaces";

const SendEmailRecoverPasswordForm = () => {
  const { setIsRecoverPassword, sendEmailRecover } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISendEmail>({
    resolver: yupResolver(sendEmailRecoverSchema),
  });

  return (
    <Modal title="Enviar email recuperação" closeModal={setIsRecoverPassword}>
      <Container onSubmit={handleSubmit(sendEmailRecover)}>
        <Input
          label="Email"
          id="email"
          placeholder="Ex: samuel@kenzie.com.br"
          type="email"
          {...register("email")}
          error={errors.email?.message as string}
        />

        <div className="submitButtonContainer">
          <Button
            type="button"
            width="fit-content"
            buttonText="Big"
            backgroundColor="--color-grey6"
            color="--color-grey2"
            borderColor="transparent"
            borderLength="0"
            onClick={() => setIsRecoverPassword(false)}
          >
            Cancelar
          </Button>

          <Button
            type="submit"
            width="fit-content"
            buttonText="Big"
            backgroundColor="--color-brand1"
            color="--color-whiteFixed"
            borderLength="0"
            borderColor="transparent"
          >
            Enviar email
          </Button>
        </div>
      </Container>
    </Modal>
  );
};

export default SendEmailRecoverPasswordForm;
