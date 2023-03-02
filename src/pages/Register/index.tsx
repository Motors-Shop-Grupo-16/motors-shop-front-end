import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { Form } from "../../components/Form";
import Input from "../../components/Input";
import { Select } from "../../components/Select/style";
import Textarea from "../../components/Textarea";
import { UserContext } from "../../contexts/UserContext";
import { IRegisterUser } from "../../contexts/UserContext.interfaces";
import { cepMask, cpfMask, dateMask, phoneMask } from "../../masks";
import { BodyText, Heading } from "../../styles/typography";
import { registerUserFormSchema } from "../../validators/registerUserFormSchema";
import { Container } from "./style";
import Navbar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { registerUser, user } = useContext(UserContext);
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  const [values, setValues] = useState({
    cpf: "",
    phone: "",
    cep: "",
    dateOfBirth: "",
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
  } = useForm<IRegisterUser>({
    resolver: yupResolver(registerUserFormSchema),
  });

  const [selected, setSelected] = useState<string>("true");
  const handleChange = (event: any) => {
    setSelected(event.target.value);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Form onSubmit={handleSubmit(registerUser)}>
          <Heading
            className=""
            tag="h5"
            style="heading-5"
            weight="500"
            color="--color-grey0"
          >
            Cadastro
          </Heading>

          <BodyText tag="p" style="body-2" weight="500" color="--color-grey0">
            Infomações pessoais
          </BodyText>

          <Input
            label="Nome"
            id="name"
            placeholder="Ex: Samuel Leão"
            type="text"
            {...register("name")}
            error={errors.name?.message as string}
          />

          <Input
            label="Email"
            id="email"
            placeholder="Ex: samuel@kenzie.com.br"
            type="email"
            {...register("email")}
            error={errors.email?.message as string}
          />

          <Input
            label="CPF"
            id="cpf"
            placeholder="000.000.000-00"
            type="text"
            {...register("cpf")}
            value={cpfMask(values.cpf)}
            onChange={inputChange}
            error={errors.cpf?.message as string}
          />

          <Input
            label="Celular"
            id="phone"
            placeholder="(DDD) 00000-0000"
            type="text"
            {...register("phone")}
            value={phoneMask(values.phone)}
            onChange={inputChange}
            error={errors.phone?.message as string}
          />

          <Input
            label="Data de nascimento"
            id="dateOfBirth"
            placeholder="2000-02-29"
            type="text"
            {...register("dateOfBirth")}
            value={dateMask(values.dateOfBirth)}
            onChange={inputChange}
            error={errors.dateOfBirth?.message as string}
          />

          <Textarea
            label="Descrição"
            id="description"
            placeholder="Digitar descrição"
            {...register("description")}
            error={errors.description?.message as string}
          />

          <BodyText tag="p" style="body-2" weight="500" color="--color-grey0">
            Infomações de endereço
          </BodyText>

          <Input
            label="CEP"
            id="cep"
            placeholder="00000-000"
            type="text"
            {...register("cep")}
            value={cepMask(values.cep)}
            onChange={inputChange}
            error={errors.cep?.message as string}
          />

          <div className="form-small-inputs">
            <Input
              label="Estado"
              id="state"
              placeholder="Digitar Estado"
              type="text"
              {...register("address.state")}
              error={errors.address?.state?.message as string}
            />

            <Input
              label="Cidade"
              id="city"
              placeholder="Digitar Cidade"
              type="text"
              {...register("address.city")}
              error={errors.address?.city?.message as string}
            />
          </div>

          <Input
            label="Rua"
            id="road"
            placeholder="Digitar Rua"
            type="text"
            {...register("address.road")}
            error={errors.address?.road?.message as string}
          />

          <div className="form-small-inputs">
            <Input
              label="Número"
              id="number"
              placeholder="Digitar número"
              type="text"
              {...register("address.number")}
              error={errors.address?.number?.message as string}
            />

            <Input
              label="Complemento"
              id="complement"
              placeholder="Ex: apart 307"
              type="text"
              {...register("address.complement")}
              error={errors.address?.complement?.message as string}
            />
          </div>

          <div className="selectContainer">
            <BodyText tag="p" style="body-2" weight="500" color="--color-grey0">
              Tipo de conta
            </BodyText>
            <Select
              id="isBuyer"
              multiple
              {...register("isBuyer")}
              value={[selected]}
              onChange={handleChange}
            >
              <option value="true">Comprador</option>
              <option value="false">Anunciante</option>
            </Select>
          </div>

          <Input
            label="Senha"
            id="password"
            placeholder="Digitar senha"
            type="password"
            {...register("password")}
            error={errors.password?.message as string}
          />

          <Input
            label="Confirmar Senha"
            id="confirmPassword"
            placeholder="Digitar senha"
            type="password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message as string}
          />

          <Button
            type="submit"
            width="100%"
            buttonText="Big"
            backgroundColor="--color-brand1"
            color="--color-whiteFixed"
            borderLength="1.5px"
            borderColor="--color-brand1"
          >
            Finalizar cadastro
          </Button>
        </Form>
        <Footer />
      </Container>
    </>
  );
};
