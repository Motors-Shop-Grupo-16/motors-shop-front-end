import { createContext, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import {
  IRegisterUser,
  IResetPassword,
  ISendEmail,
  ISignIn,
  ISignInResponse,
  IUserContext,
  IUserProviderProps,
} from "./UserContext.interfaces";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [isRecoverPassword, setIsRecoverPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  const signIn = async (data: ISignIn) => {
    const responseSignIn = api.post<ISignInResponse>("/login", data);

    toast.promise(responseSignIn, {
      loading: "Carregando...",
      success: (response) => {
        const { token } = response.data;

        localStorage.setItem("@usermotorsshop:token", token);
        //alterar depois para home usser logado
        navigate("/");
        return `Seja bem-vindo(a)`;
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  function registerUser(dataUser: IRegisterUser) {
    const { isBuyer, cep, ...data } = dataUser;
    data.address.cep = cep;
    const user = {
      ...data,
      isAdvertiser: isBuyer === "true" ? false : true,
    };

    const promisseRegister = api
      .post("/users", user)
      .then((response) => response);

    toast.promise(promisseRegister, {
      loading: "Carregando...",
      success: (response) => {
        navigate("/login");
        return "Registrado com sucesso, realize o login.";
      },
      error: (error) => `${error.response.data.message}`,
    });
  }

  function sendEmailRecover(data: ISendEmail) {
    const promisseSendEmail = api
      .post("/users/recover-password", data)
      .then((response) => response);

    toast.promise(promisseSendEmail, {
      loading: "Enviando...",
      success: (response) => {
        setIsRecoverPassword(false);
        return "Verifique o seu email.";
      },
      error: (error) => `${error.response.data.message}`,
    });
  }

  function recoverPassword(data: IResetPassword, token: string | null) {
    const { confirmPassword, ...dataRecover } = data;

    const promisseRecoverPassword = api
      .patch(`/users/recover-password/${token}`, dataRecover)
      .then((response) => response);

    toast.promise(promisseRecoverPassword, {
      loading: "Alterando...",
      success: (response) => {
        navigate("/login");
        return "Senha alterada com sucesso!";
      },
      error: (error) => `${error.response.data.message}`,
    });
  }

  const values = useMemo(
    () => ({
      signIn,
      registerUser,
      isRecoverPassword,
      setIsRecoverPassword,
      sendEmailRecover,
      recoverPassword,
    }),
    [isRecoverPassword]
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
