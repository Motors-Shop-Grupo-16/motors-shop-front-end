import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./style";
import Input from "../Input";
import Textarea from "../Textarea";
import { useContext, useState } from "react";
import { BodyText } from "../../styles/typography";
import { Select } from "../Select/style";
import Modal from "../Modal";
import Button from "../Button";
import { editUserFormSchema } from "../../validators/editUserFormSchema";
import { UserContext } from "../../contexts/UserContext";
import { IEditUserFormProps } from "./interfaces";
import { cpfMask } from "../../masks";

const EditUserForm = ({ user }: IEditUserFormProps) => {
  const { setIsEditUser, editUser } = useContext(UserContext);

  const [values, setValues] = useState({
    cpf: user.cpf,
    phone: user.phone,
    dateOfBirth: user.dateOfBirth,
  });

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editUserFormSchema),
  });

  return (
    <Modal title="Editar perfil" closeModal={setIsEditUser}>
      <Container onSubmit={handleSubmit(editUser)}>
        <BodyText tag="p" style="body-2" weight="500" color="--color-grey0">
          Informações pessoais
        </BodyText>

        <Input
          label="Nome"
          id="name"
          placeholder="Digitar nome"
          defaultValue={user.name}
          type="text"
          {...register("name")}
          error={errors.name?.message as string}
        />

        <Input
          label="E-mail"
          id="email"
          placeholder="Digitar e-mail"
          defaultValue={user.email}
          type="text"
          {...register("email")}
          error={errors.email?.message as string}
        />

        <Input
          label="CPF"
          id="cpf"
          placeholder="Digitar cpf"
          defaultValue={user.cpf}
          type="text"
          {...register("cpf")}
          error={errors.cpf?.message as string}
        />

        <Input
          label="Celular"
          id="phone"
          placeholder="Digitar número de telefone"
          defaultValue={user.phone}
          type="text"
          {...register("phone")}
          error={errors.phone?.message as string}
        />

        <Input
          label="Data de nascimento"
          id="dateOfBirth"
          placeholder="Ex.: 1999-12-29"
          defaultValue={user.dateOfBirth.slice(0, 10)}
          type="text"
          {...register("dateOfBirth")}
          error={errors.dateOfBirth?.message as string}
        />

        <Textarea
          label="Descrição"
          id="description"
          placeholder="Digitar descrição"
          defaultValue={user.description}
          {...register("description")}
          error={errors.description?.message as string}
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
            onClick={() => setIsEditUser(false)}
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
            Salvar alterações
          </Button>
        </div>
      </Container>
    </Modal>
  );
};

export default EditUserForm;
