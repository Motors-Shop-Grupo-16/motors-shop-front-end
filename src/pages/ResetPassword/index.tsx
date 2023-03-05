import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useMemo } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { Form } from "../../components/Form";
import Input from "../../components/Input";
import { Heading } from "../../styles/typography";
import { Container } from "./style";

import { useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { IResetPassword } from "../../contexts/UserContext.interfaces";
import { resetPasswordUserFormSchema } from "../../validators/resetPasswordUserFormSchema";

export const ResetPassword = () => {
  const { recoverPassword } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetPassword>({
    resolver: yupResolver(resetPasswordUserFormSchema),
  });

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }
  const query = useQuery();
  const token = query.get("token");

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit((data) => recoverPassword(data, token))}>
          <Heading
            className=""
            tag="h5"
            style="heading-5"
            weight="500"
            color="--color-grey0"
          >
            Criar Nova Senha
          </Heading>

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
            Criar nova senha
          </Button>
        </Form>
        <Footer />
      </Container>
    </>
  );
};
