import { createContext, useEffect, useMemo, useState } from "react";
import { FieldValues } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import {
  IAnnouncement,
  IAnnouncementContext,
  IAnnouncementProviderProps,
  ICommentData,
} from "./AnnouncementContext.interfaces";
import { toast } from "react-hot-toast";

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

  const [announcement, setAnnouncement] = useState<IAnnouncement | null>(null);

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
    console.log(data);
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

    const token = localStorage.getItem("@usermotorsshop:token");
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const promiseCreate = api.post(`/announcements/`, dataToSend);

    toast.promise(promiseCreate, {
      loading: "Salvando...",
      success: (response) => {
        setIsCreateAnnouncement(false);
        return "Criado com sucesso";
      },
      error: (error) => `${error.response.data.message}`,
    });
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

    const token = localStorage.getItem("@usermotorsshop:token");
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const promiseUpdate = api.patch(`/announcements/${id}`, dataToSend);

    toast.promise(promiseUpdate, {
      loading: "Atualizando...",
      success: (response) => {
        setIsUpdateAnnouncement(false);

        return "Atualizado com sucesso";
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const deleteAnnouncement = async (id: string) => {
    const token = localStorage.getItem("@usermotorsshop:token");
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const promiseDelete = api.delete(`/announcements/${id}`);

    toast.promise(promiseDelete, {
      loading: "Deletando...",
      success: (response) => {
        setIsDeleteAnnouncement(false);
        return "Deletado com sucesso";
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const goTo = (route: string) => {
    navigate(route);
  };

  const confirmDeletion = (id: string) => {
    setIsUpdateAnnouncement(false);
    setIsDeleteAnnouncement(true);
    setAnnouncementToDelete(id);
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

  const listAnnouncementsByIdAdvertiser = async (id: string) => {
    try {
      const { data } = await api.get(`/announcements/advertiser/${id}`);
      setAnnouncementsAdvertiser(data);
    } catch (error) {
      goTo("/error404");
      console.error(error);
    }
  };

  const values = useMemo(
    () => ({
      announcementsAdvertiser,
      setAnnouncementsAdvertiser,
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
      announcement,
      setAnnouncement,
      auctions
    }),
    [
      announcementsAdvertiser,
      cars,
      motorcycles,
      isCreateAnnouncement,
      isUpdateAnnouncement,
      detailedAnnouncement,
      loading,
      isDeleteAnnouncement,
      detailedAnnouncement,
      announcement,
      auctions
    ]
  );

  return (
    <AnnouncementContext.Provider value={values}>
      {children}
    </AnnouncementContext.Provider>
  );
};
