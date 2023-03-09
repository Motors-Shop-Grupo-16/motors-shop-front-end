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
    phone: string;
  };
  images: IImage[];
  comments: IComment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IComment {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  User: {
    id: string;
    name: string;
    phone: string;
  };
}

export type ICommentData = Pick<IComment, "content">;

export interface IImage {
  id?: string;
  url: string;
}

export interface IAnnouncementContext {
  announcementsAdvertiser: IAnnouncement[];
  setAnnouncementsAdvertiser: Dispatch<SetStateAction<IAnnouncement[]>>;
  announcement: IAnnouncement | null;
  setAnnouncement: Dispatch<SetStateAction<IAnnouncement | null>>;
  cars: IAnnouncement[];
  setCars: Dispatch<SetStateAction<IAnnouncement[]>>;
  motorcycles: IAnnouncement[];
  setMotorcycles: Dispatch<SetStateAction<IAnnouncement[]>>;
  auctions: IAnnouncement[];
  isCreateAnnouncement: boolean;
  setIsCreateAnnouncement: Dispatch<SetStateAction<boolean>>;
  createAnnouncement: (data: FieldValues) => void;
  isUpdateAnnouncement: boolean;
  setIsUpdateAnnouncement: Dispatch<SetStateAction<boolean>>;
  updateAnnouncement: (data: FieldValues, id: string) => Promise<void>;
  deleteAnnouncement: (id: string) => Promise<void>;
  goTo: (route: string) => void;
  listAnnouncementById: (id: string) => Promise<void>;
  listAnnouncementsByIdAdvertiser: (id: string) => Promise<void>;
  detailedAnnouncement: IAnnouncement | null;
  isDeleteAnnouncement: boolean;
  setIsDeleteAnnouncement: Dispatch<SetStateAction<boolean>>;
  announcementToDelete: string;
  setAnnouncementToDelete: Dispatch<React.SetStateAction<string>>;
  confirmDeletion: (id: string) => void;
  createComment: (commentData: ICommentData, id: string) => Promise<void>;
  detailedAnnouncementModal: boolean;
  setDetailedAnnouncementModal: Dispatch<SetStateAction<boolean>>;
  updateComment: (id: string, data: { content: string }) => Promise<void>;
  deleteComment: (id: string) => Promise<void>;
  commentModal: boolean;
  setCommentModal: Dispatch<SetStateAction<boolean>>;
}

export interface IAnnouncementProviderProps {
  children: ReactNode;
}
