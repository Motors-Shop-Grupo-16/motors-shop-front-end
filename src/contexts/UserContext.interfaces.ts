import { Dispatch, ReactNode, SetStateAction } from "react";

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

export interface IAddress {
  cep: string;
  state: string;
  city: string;
  road: string;
  number: string;
  complement: string;
}

export interface IUserContext {
  signIn: (data: ISignIn) => void;
  registerUser: (data: IRegisterUser) => void;
}
