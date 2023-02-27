export interface IUpdateAnnouncementFormProps {
  announcement: IAnnouncement;
}

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
  images: IImage[];
  isActive: boolean;
  userId: string;
}

export interface IImage {
  url: string;
}
