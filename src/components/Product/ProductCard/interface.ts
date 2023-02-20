export interface IProducts {
  id: string;
  title: string;
  typeSale: string;
  year: string;
  mileage: string;
  price: string;
  description: string;
  typeVehicle: string;
  coverImage: string;
  isActive: boolean;
  images: IImages[];
  user: IUser;
}

interface IImages {
  id: string;
  url: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  dateOfBirth: string;
  isAdvertiser: boolean;
  createdAt: Date;
  updatedAt: Date;
}
