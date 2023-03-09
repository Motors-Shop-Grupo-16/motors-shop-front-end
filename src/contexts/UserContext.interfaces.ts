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
  complement?: string;
  User: {
    id?: string;
    name?: string;
  };
}

export interface ISendEmail {
  email: string;
}

export interface IResetPassword {
  password: string;
  confirmPassword: string;
}

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  dateOfBirth: string;
  description: string;
  isAdvertiser: boolean;
  createdAt: string;
  updatedAt: string;
  Address: IAddressResponse;
}

export interface IAddressResponse extends IAddress {
  id: string;
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
  user: IUserResponse | null;
  setUser: Dispatch<SetStateAction<IUserResponse | null>>;
  isEditAddress: boolean;
  setIsEditAddress: Dispatch<React.SetStateAction<boolean>>;
  editAddress: (data: FieldValues) => void;
  isDeleteUser: boolean;
  setIsDeleteUser: Dispatch<React.SetStateAction<boolean>>;
  deleteUser: () => void;
  confirmUserDeletion: () => void;
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
}
