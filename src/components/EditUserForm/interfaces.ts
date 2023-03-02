export interface IUser {
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
}

export interface IEditUserFormProps {
  user: IUser;
}
