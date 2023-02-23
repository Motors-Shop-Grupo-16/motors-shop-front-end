import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { api } from "../../services/api";

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
  User: { name: string };
}

export interface IAnnouncementContext {
  announcements: IAnnouncement[] | [];
  setAnnouncements: Dispatch<SetStateAction<IAnnouncement[] | []>>;
  cars: IAnnouncement[] | [];
  setCars: Dispatch<SetStateAction<IAnnouncement[] | []>>;
  motorcycles: IAnnouncement[] | [];
  setMotorcycles: Dispatch<SetStateAction<IAnnouncement[] | []>>;
}

export interface IAnnouncementProviderProps {
  children: ReactNode;
}

export const AnnouncementContext = createContext({} as IAnnouncementContext);

export const AnnouncementProvider = ({
  children,
}: IAnnouncementProviderProps) => {
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);
  const [cars, setCars] = useState<IAnnouncement[]>([]);
  const [motorcycles, setMotorcycles] = useState<IAnnouncement[]>([]);

  useEffect(() => {
    async function listAnnouncements() {
      const responseRegisterContact = await api.get("/announcements");

      setCars(
        responseRegisterContact.data.filter(
          (car: IAnnouncement) => car.typeVehicle === "car"
        )
      );
      setMotorcycles(
        responseRegisterContact.data.filter(
          (car: IAnnouncement) => car.typeVehicle === "motorcycle"
        )
      );
    }
    listAnnouncements();
  }, []);

  const values = useMemo(
    () => ({
      announcements,
      setAnnouncements,
      cars,
      setCars,
      motorcycles,
      setMotorcycles,
    }),
    [announcements]
  );

  return (
    <AnnouncementContext.Provider value={values}>
      {children}
    </AnnouncementContext.Provider>
  );
};
