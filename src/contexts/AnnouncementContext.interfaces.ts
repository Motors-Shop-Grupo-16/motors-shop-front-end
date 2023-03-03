import { Dispatch, ReactNode, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";

export interface IAnnouncement {
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
  userId: string;
  User: {
    id: string;
    name: string;
    description: string;
  };
  images: IImage[];
  comments: IComment[];
}

export interface IComment {
  id: string;
  content: string;
  createdAt: Date;
  User: {
    id: string;
    name: string;
  };
}

export interface IImage {
  id?: string;
  url: string;
}

export interface IAnnouncementContext {
  announcements: IAnnouncement[] | [];
  setAnnouncements: Dispatch<SetStateAction<IAnnouncement[] | []>>;
  cars: IAnnouncement[] | [];
  setCars: Dispatch<SetStateAction<IAnnouncement[] | []>>;
  motorcycles: IAnnouncement[] | [];
  setMotorcycles: Dispatch<SetStateAction<IAnnouncement[] | []>>;
  isCreateAnnouncement: boolean;
  setIsCreateAnnouncement: Dispatch<SetStateAction<boolean>>;
  createAnnouncement: (data: FieldValues) => void;
  isUpdateAnnouncement: boolean;
  setIsUpdateAnnouncement: Dispatch<SetStateAction<boolean>>;
  updateAnnouncement: (data: FieldValues, id: string) => Promise<void>;
  deleteAnnouncement: (id: string) => Promise<void>;
  goTo: (route: string) => void;
  listAnnouncementById: (id: string) => Promise<void>;
  detailedAnnouncement: IAnnouncement | null;
  loading: boolean;
  isDeleteAnnouncement: boolean;
  setIsDeleteAnnouncement: Dispatch<SetStateAction<boolean>>;
  announcementToDelete: string;
  setAnnouncementToDelete: Dispatch<React.SetStateAction<string>>;
  confirmDeletion: (id: string) => void;
}

export interface IAnnouncementProviderProps {
  children: ReactNode;
}
