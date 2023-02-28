import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { FieldValues } from "react-hook-form";
import { api } from "../services/api";

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
  isCreateAnnouncement: boolean;
  setIsCreateAnnouncement: Dispatch<SetStateAction<boolean>>;
  createAnnouncement: (data: FieldValues) => void;
  isUpdateAnnouncement: boolean;
  setIsUpdateAnnouncement: Dispatch<SetStateAction<boolean>>;
  updateAnnouncement: (data: FieldValues, id: string) => Promise<void>;
  deleteAnnouncement: (id: string) => Promise<void>;
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
  const [isCreateAnnouncement, setIsCreateAnnouncement] =
    useState<boolean>(false);
  const [isUpdateAnnouncement, setIsUpdateAnnouncement] =
    useState<boolean>(false);

  useEffect(() => {
    async function listAnnouncements() {
      const responseAnnouncements = await api.get("/announcements");

      setCars(
        responseAnnouncements.data.filter(
          (car: IAnnouncement) => car.typeVehicle === "car"
        )
      );

      setMotorcycles(
        responseAnnouncements.data.filter(
          (car: IAnnouncement) => car.typeVehicle === "motorcycle"
        )
      );
    }
    listAnnouncements();
  }, []);

  const createAnnouncement = async (data: FieldValues) => {
    const {
      coverImage,
      description,
      mileage,
      price,
      title,
      typeSale,
      typeVehicle,
      year,
      ...rest
    } = data;

    let images = Object.values(rest).map((value: string) => {
      return { url: value };
    });

    images = images.filter((image) => image.url != "");

    const dataToSend = {
      coverImage,
      description,
      mileage,
      price,
      title,
      typeSale,
      typeVehicle,
      year,
      images,
      isActive: true,
    };

    try {
      api.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkdmVydGlzZXIiOnRydWUsImlhdCI6MTY3NzQ5ODUzOSwiZXhwIjoxNjc4MTAzMzM5LCJzdWIiOiI4NzkyZmNmZC00OWM2LTQ3NzItYjM5Ni1hY2U2ODg2NTQ2YzQifQ._RR_t2NRj7Qhn4A2cLW8bbnwkgQE2DYKiFfsKqg7uqc`;

      await api.post("/announcements", dataToSend);

      setIsCreateAnnouncement(false);
    } catch (error) {
      console.error(error);
    }
  };

  const updateAnnouncement = async (data: FieldValues, id: string) => {
    const {
      coverImage,
      description,
      mileage,
      price,
      title,
      typeSale,
      typeVehicle,
      year,
      isActive,
      ...rest
    } = data;

    let images = Object.values(rest).map((value: string) => {
      return { url: value };
    });

    images = images.filter((image) => image.url != "");

    const dataToSend = {
      coverImage,
      description,
      mileage,
      price,
      title,
      typeSale,
      typeVehicle,
      year,
      images,
      isActive: isActive == "true" ? true : false,
    };

    try {
      api.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkdmVydGlzZXIiOnRydWUsImlhdCI6MTY3NzU5MzA2OCwiZXhwIjoxNjc4MTk3ODY4LCJzdWIiOiI4NzkyZmNmZC00OWM2LTQ3NzItYjM5Ni1hY2U2ODg2NTQ2YzQifQ.CJ6-nlOWNKmQNb_FK6O9CYy9zzYoHGf7ZL7wAVgYQSg`;

      await api.patch(`/announcements/advertiser/${id}`, dataToSend);

      setIsUpdateAnnouncement(false);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAnnouncement = async (id: string) => {
    try {
      api.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkdmVydGlzZXIiOnRydWUsImlhdCI6MTY3NzI2ODY1NSwiZXhwIjoxNjc3ODczNDU1LCJzdWIiOiI4NzkyZmNmZC00OWM2LTQ3NzItYjM5Ni1hY2U2ODg2NTQ2YzQifQ.LPs0DayzmMISq8BNYKXaYQqrdWUTtPgcn5aoPee5GlM`;

      await api.delete(`/announcements/advertiser/${id}`);

      setIsUpdateAnnouncement(false);
    } catch (error) {
      console.error(error);
    }
  };

  const values = {
    announcements,
    setAnnouncements,
    cars,
    setCars,
    motorcycles,
    setMotorcycles,
    isCreateAnnouncement,
    setIsCreateAnnouncement,
    createAnnouncement,
    isUpdateAnnouncement,
    setIsUpdateAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
  };

  return (
    <AnnouncementContext.Provider value={values}>
      {children}
    </AnnouncementContext.Provider>
  );
};
