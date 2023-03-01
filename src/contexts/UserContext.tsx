import { ReactNode, createContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { IRegisterUser, ISignIn, ISignInResponse, IUserContext, IUserProviderProps } from "./UserContext.interfaces";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {

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
        console.log(response.data);
        navigate("/login");
        return "Registrado com sucesso, realize o login.";
      },
      error: (error) => `${error.response.data.message}`,
    });
  }



  return (
    <UserContext.Provider
      value={{
        signIn,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
