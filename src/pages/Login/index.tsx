import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { Form } from "../../components/Form";
import Input from "../../components/Input";
import { BodyText, Heading } from "../../styles/typography";
import { loginFormSchema } from "../../validators/loginFormSchema";
import { Container } from "./style";

import { UserContext } from "../../contexts/UserContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ISignIn } from "../../contexts/UserContext.interfaces";

export const Login = () => {
  const { signIn } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>({
    resolver: yupResolver(loginFormSchema),
  });

  const navigate = useNavigate();

  return (
    <Container>
      <h1>Navbar</h1>
      <Form onSubmit={handleSubmit(signIn)}>
        <Heading
          className=""
          tag="h5"
          style="heading-5"
          weight="500"
          color="--color-grey0"
        >
          Login
        </Heading>

        <Input
          label="Email"
          id="email"
          placeholder="Digitar email"
          type="email"
          {...register("email")}
          error={errors.email?.message as string}
        />

        <Input
          label="Password"
          id="password"
          placeholder="Digitar senha"
          type="password"
          {...register("password")}
          error={errors.password?.message as string}
        />

        <div
          className="form-login-password"
          onClick={() => console.log("Abrir modal recuperar senha")}
        >
          <BodyText tag="p" style="body-2" weight="500" color="--color-grey2">
            Esqueci minha senha
          </BodyText>
        </div>

        <Button
          type="submit"
          width="100%"
          buttonText="Big"
          backgroundColor="--color-brand1"
          color="--color-whiteFixed"
          borderLength="1.5px"
          borderColor="--color-brand1"
        >
          Entrar
        </Button>

        <div className="form-login-account">
          <BodyText tag="p" style="body-2" weight="400" color="--color-grey2">
            Ainda não possui conta?
          </BodyText>
        </div>
        <Button
          type="button"
          width="100%"
          backgroundColor="--color-grey10"
          color="--color-grey0"
          borderLength="1.5px"
          borderColor="--color-grey4"
          onClick={() => navigate("/register")}
        >
          Cadastrar
        </Button>
      </Form>
      <Footer />
    </Container>
  );
};
