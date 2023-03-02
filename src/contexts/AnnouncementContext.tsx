import { createContext, useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { api } from "../services/api";
import {
  IAnnouncement,
  IAnnouncementContext,
  IAnnouncementProviderProps,
} from "./AnnouncementContext.interfaces";

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
      await api.patch(`/announcements/advertiser/${id}`, dataToSend);

      setIsUpdateAnnouncement(false);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAnnouncement = async (id: string) => {
    try {
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
