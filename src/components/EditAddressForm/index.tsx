import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./style";
import Input from "../Input";
import Textarea from "../Textarea";
import { useContext, useState } from "react";
import { BodyText } from "../../styles/typography";
import Modal from "../Modal";
import Button from "../Button";
import { UserContext } from "../../contexts/UserContext";
import { cepMask } from "../../masks";
import { IEditAddressFormProps } from "./interfaces";
import { editAddressFormSchema } from "../../validators/editAddressFormSchema";

const EditAddressForm = ({ address }: IEditAddressFormProps) => {
  const { setIsEditAddress, editAddress } = useContext(UserContext);

  const [values, setValues] = useState({
    cep: address.cep,
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
    resolver: yupResolver(editAddressFormSchema),
  });

  return (
    <Modal title="Editar endereço" closeModal={setIsEditAddress}>
      <Container onSubmit={handleSubmit(editAddress)}>
        <BodyText tag="p" style="body-2" weight="500" color="--color-grey0">
          Infomações de endereço
        </BodyText>

        <Input
          label="CEP"
          id="cep"
          placeholder="Digitar CEP"
          type="text"
          {...register("cep")}
          value={cepMask(values.cep)}
          onChange={inputChange}
          error={errors.cep?.message as string}
        />

        <div className="smallInputs">
          <Input
            label="Estado"
            id="state"
            placeholder="Digitar estado"
            defaultValue={address.state}
            type="text"
            {...register("state")}
            error={errors.state?.message as string}
          />

          <Input
            label="Cidade"
            id="city"
            placeholder="Digitar cidade"
            defaultValue={address.city}
            type="text"
            {...register("city")}
            error={errors.city?.message as string}
          />
        </div>

        <Input
          label="Rua"
          id="road"
          placeholder="Digitar nome da rua"
          defaultValue={address.road}
          type="text"
          {...register("road")}
          error={errors.road?.message as string}
        />

        <div className="smallInputs">
          <Input
            label="Número"
            id="number"
            placeholder="Ex.: 1999-12-29"
            defaultValue={address.number}
            type="text"
            {...register("number")}
            error={errors.number?.message as string}
          />

          <Input
            label="Complemento"
            id="complement"
            placeholder="Digitar complemento"
            defaultValue={address.complement}
            type="text"
            {...register("complement")}
            error={errors.complement?.message as string}
          />
        </div>

        <div className="submitButtonContainer">
          <Button
            type="button"
            width="fit-content"
            buttonText="Big"
            backgroundColor="--color-grey6"
            color="--color-grey2"
            borderColor="transparent"
            borderLength="0"
            onClick={() => setIsEditAddress(false)}
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

export default EditAddressForm;
