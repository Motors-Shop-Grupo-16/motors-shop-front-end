import { createContext, useEffect, useMemo, useState } from "react";
import { FieldValues } from "react-hook-form";
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
  IUserResponse,
} from "./UserContext.interfaces";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUserResponse | null>(null);
  const [isEditUser, setIsEditUser] = useState<boolean>(false);
  const [isRecoverPassword, setIsRecoverPassword] = useState<boolean>(false);
  const [isEditAddress, setIsEditAddress] = useState<boolean>(false);
  const [isDeleteUser, setIsDeleteUser] = useState<boolean>(false);

  const [token, setToken] = useState<string | null>(
    localStorage.getItem("@usermotorsshop:token")
  );

  const navigate = useNavigate();

  async function loadUser() {
    if (token) {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;

        await api.get("/users").then((response) => {
          setUser(response.data);
        });
      } catch (error) {
        localStorage.removeItem("@usermotorsshop:token");
        localStorage.removeItem("@usermotorsshop:userId");
      }
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  const signIn = async (data: ISignIn) => {
    const responseSignIn = api.post<ISignInResponse>("/login", data);

    toast.promise(responseSignIn, {
      loading: "Carregando...",
      success: (response) => {
        const { token } = response.data;

        localStorage.setItem("@usermotorsshop:token", token);
        setToken(token);
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        api.get(`/users`).then((responsee) => {
          setUser(responsee.data);
        });
        loadUser();
        navigate("/");

        return `Seja bem-vindo(a)`;
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const registerUser = (dataUser: IRegisterUser) => {
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

  const editUser = (data: FieldValues) => {
    const promiseRegister = api.patch("/users", data);

    toast.promise(promiseRegister, {
      loading: "Carregando...",
      success: (response) => {
        setIsEditUser(false);
        loadUser();
        return "Usuário atualizado com sucesso!";
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const editAddress = (data: FieldValues) => {
    const promiseRegister = api.patch("/addresses", data);

    toast.promise(promiseRegister, {
      loading: "Carregando...",
      success: (response) => {
        setIsEditAddress(false);
        loadUser();
        return "Endereço atualizado com sucesso!";
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const deleteUser = () => {
    const promiseRegister = api.delete("/users");

    toast.promise(promiseRegister, {
      loading: "Carregando...",
      success: (response) => {
        setIsDeleteUser(false);
        navigate("/");
        return "Usuário deletado com sucesso!";
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const confirmUserDeletion = () => {
    setIsEditUser(false);
    setIsDeleteUser(true);
  };

  const sendEmailRecover = (data: ISendEmail) => {
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
  };

  const recoverPassword = (data: IResetPassword, token: string | null) => {
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
  };

  const values = useMemo(
    () => ({
      signIn,
      registerUser,
      isRecoverPassword,
      setIsRecoverPassword,
      sendEmailRecover,
      recoverPassword,
      isEditUser,
      setIsEditUser,
      editUser,
      user,
      setUser,
      isEditAddress,
      setIsEditAddress,
      editAddress,
      isDeleteUser,
      setIsDeleteUser,
      deleteUser,
      confirmUserDeletion,
      token,
      setToken,
    }),
    [isRecoverPassword, isEditUser, user, isEditAddress, token, isDeleteUser]
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
