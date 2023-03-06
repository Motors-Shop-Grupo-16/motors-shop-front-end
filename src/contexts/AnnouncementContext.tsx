import { createContext, useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import {
  IAnnouncement,
  IAnnouncementContext,
  IAnnouncementProviderProps,
  ICommentData,
} from "./AnnouncementContext.interfaces";

export const AnnouncementContext = createContext({} as IAnnouncementContext);

export const AnnouncementProvider = ({
  children,
}: IAnnouncementProviderProps) => {
  const [announcementsAdvertiser, setAnnouncementsAdvertiser] = useState<
    IAnnouncement[]
  >([]);
  const [cars, setCars] = useState<IAnnouncement[]>([]);
  const [motorcycles, setMotorcycles] = useState<IAnnouncement[]>([]);
  const [auctions, setAuctions] = useState<IAnnouncement[]>([]);
  const [isCreateAnnouncement, setIsCreateAnnouncement] =
    useState<boolean>(false);
  const [isUpdateAnnouncement, setIsUpdateAnnouncement] =
    useState<boolean>(false);
  const [detailedAnnouncement, setDetailedAnnouncement] =
    useState<IAnnouncement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isDeleteAnnouncement, setIsDeleteAnnouncement] =
    useState<boolean>(false);
  const [announcementToDelete, setAnnouncementToDelete] = useState<string>("");
  const [detailedAnnouncementModal, setDetailedAnnouncementModal] =
    useState<boolean>(false);

  const navigate = useNavigate();

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    async function listAnnouncements() {
      const responseAnnouncements = await api.get("/announcements");

      setCars(
        responseAnnouncements.data.filter(
          (car: IAnnouncement) => car.typeVehicle === "car" && car.typeSale === "sale"
        )
      );

      setMotorcycles(
        responseAnnouncements.data.filter(
          (motorcycle: IAnnouncement) => motorcycle.typeVehicle === "motorcycle" && motorcycle.typeSale === "sale"
        )
      );

      setAuctions(
        responseAnnouncements.data.filter(
          (auction: IAnnouncement) => auction.typeSale === "auction"
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
    console.log("entrou na deleção");
    try {
      await api.delete(`/announcements/${id}`);

      setIsDeleteAnnouncement(false);
    } catch (error) {
      console.error(error);
    }
  };

  const goTo = (route: string) => {
    navigate(route);
  };

  const listAnnouncementById = async (id: string) => {
    try {
      setLoading(true);
      const { data } = await api.get(`/announcements/${id}`);

      setDetailedAnnouncement(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const createComment = async (commentData: ICommentData, id: string) => {
    const token = localStorage.getItem("@usermotorsshop:token");
    if (token) {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        await api.post(`/comments/${id}`, commentData);

        listAnnouncementById(id);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const confirmDeletion = (id: string) => {
    setIsUpdateAnnouncement(false);
    setIsDeleteAnnouncement(true);
    setAnnouncementToDelete(id);
  };

  const listAnnouncementsByIdAdvertiser = async (id: string) => {
    try {
      const { data } = await api.get(`/announcements/advertiser/${id}`);
      setAnnouncementsAdvertiser(data);
    } catch (error) {
      goTo("/error404");
      console.error(error);
    }
  };

  const values = {
    announcementsAdvertiser,
    setAnnouncementsAdvertiser,
    cars,
    setCars,
    motorcycles,
    setMotorcycles,
    auctions,
    isCreateAnnouncement,
    setIsCreateAnnouncement,
    createAnnouncement,
    isUpdateAnnouncement,
    setIsUpdateAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
    goTo,
    listAnnouncementById,
    detailedAnnouncement,
    loading,
    isDeleteAnnouncement,
    setIsDeleteAnnouncement,
    announcementToDelete,
    setAnnouncementToDelete,
    confirmDeletion,
    createComment,
    detailedAnnouncementModal,
    setDetailedAnnouncementModal,
    listAnnouncementsByIdAdvertiser,
  };

  return (
    <AnnouncementContext.Provider value={values}>
      {children}
    </AnnouncementContext.Provider>
  );
};
