import { Dispatch, ReactNode, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";

export interface IUserProviderProps {
  children: ReactNode;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignInResponse {
  token: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
  phone: string;
  dateOfBirth: string;
  description: string;
  isBuyer: string;
  cep: string;
  address: IAddress;
}

export interface IUpdateUser extends Partial<IRegisterUser> {}

export interface IAddress {
  cep: string;
  state: string;
  city: string;
  road: string;
  number: string;
  complement: string;
}

export interface ISendEmail {
  email: string;
}

export interface IResetPassword {
  password: string;
  confirmPassword: string;
}

export interface IUserContext {
  signIn: (data: ISignIn) => void;
  registerUser: (data: IRegisterUser) => void;
  isEditUser: boolean;
  setIsEditUser: Dispatch<React.SetStateAction<boolean>>;
  editUser: (data: FieldValues) => void;
  sendEmailRecover: (data: ISendEmail) => void;
  recoverPassword: (data: IResetPassword, token: string | null) => void;
  isRecoverPassword: boolean;
  setIsRecoverPassword: Dispatch<SetStateAction<boolean>>;
}
