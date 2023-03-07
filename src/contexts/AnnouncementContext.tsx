import { createContext, useContext, useEffect, useMemo, useState } from "react";
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

import { UserContext } from "./UserContext";

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
  const [isDeleteAnnouncement, setIsDeleteAnnouncement] =
    useState<boolean>(false);
  const [announcementToDelete, setAnnouncementToDelete] = useState<string>("");
  const [detailedAnnouncementModal, setDetailedAnnouncementModal] =
    useState<boolean>(false);
  const [commentModal, setCommentModal] = useState<boolean>(false);

  const [announcement, setAnnouncement] = useState<IAnnouncement | null>(null);

  const navigate = useNavigate();

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { token } = useContext(UserContext);

  useEffect(() => {
    async function listAnnouncements() {
      const responseAnnouncements = await api.get("/announcements");

      setCars(
        responseAnnouncements.data.filter(
          (car: IAnnouncement) =>
            car.typeVehicle === "car" && car.typeSale === "sale"
        )
      );

      setMotorcycles(
        responseAnnouncements.data.filter(
          (motorcycle: IAnnouncement) =>
            motorcycle.typeVehicle === "motorcycle" &&
            motorcycle.typeSale === "sale"
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
      const { data } = await api.get(`/announcements/${id}`);

      setDetailedAnnouncement(data);
    } catch (error) {
      console.error(error);
      goTo("/error404");
    }
  };

  const createComment = async (commentData: ICommentData, id: string) => {
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const promisePost = api.post(`/comments/${id}`, commentData);

      toast.promise(promisePost, {
        loading: "Criando...",
        success: () => {
          listAnnouncementById(id);
          return "Criado com sucesso";
        },
        error: (error) => `${error.response.data.message}`,
      });
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

  const updateComment = async (
    id: string,
    data: { content: string },
  ) => {
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    const promisePatch = api.patch(`/comments/${id}`, data);

    toast.promise(promisePatch, {
      loading: "Editando...",
      success: () => {
        setCommentModal(false);
        return "Editado com sucesso";
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const deleteComment = async (id: string) => {
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    const promiseDelete = api.delete(`/comments/${id}`);

    toast.promise(promiseDelete, {
      loading: "Deletando...",
      success: () => {
        setCommentModal(false);
        return "Deletado com sucesso";
      },
      error: (error) => `${error.response.data.message}`,
    });
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
      auctions,
      updateComment,
      deleteComment,
      commentModal,
      setCommentModal,
    }),
    [
      announcementsAdvertiser,
      cars,
      motorcycles,
      isCreateAnnouncement,
      isUpdateAnnouncement,
      detailedAnnouncement,
      isDeleteAnnouncement,
      detailedAnnouncementModal,
      announcement,
      auctions,
      commentModal,
    ]
  );

  return (
    <AnnouncementContext.Provider value={values}>
      {children}
    </AnnouncementContext.Provider>
  );
};
