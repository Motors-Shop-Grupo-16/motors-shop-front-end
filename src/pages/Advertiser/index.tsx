import { useContext, useEffect, useMemo } from "react";
import { Heading } from "../../styles/typography";
import { Container, ContainerListAdvertiser } from "./style";

import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import ProductList from "../../components/Product/ProductList";
import UserProfile from "../../components/UserProfile";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { IAnnouncement } from "../../contexts/AnnouncementContext.interfaces";
import { UserContext } from "../../contexts/UserContext";
import UpdateAnnouncementForm from "../../components/UpdateAnnouncementForm";
import DeleteAnnouncementModal from "../../components/DeleteAnnouncementModal";
import CreateAnnouncementForm from "../../components/CreateAnnouncementForm";

export const Advertiser = () => {
  const {
    announcementsAdvertiser,
    listAnnouncementsByIdAdvertiser,
    isUpdateAnnouncement,
    isDeleteAnnouncement,
    announcement,
    isCreateAnnouncement,
  } = useContext(AnnouncementContext);
  const { user } = useContext(UserContext);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }
  const userId = useQuery().get("user");

  useEffect(() => {
    console.log("useEffect");
    listAnnouncementsByIdAdvertiser(userId!);
  }, [
    userId,
    isUpdateAnnouncement,
    isDeleteAnnouncement,
    isCreateAnnouncement,
  ]);

  return (
    <>
      {isUpdateAnnouncement && announcement && (
        <UpdateAnnouncementForm announcement={announcement} />
      )}
      {isDeleteAnnouncement && announcement && <DeleteAnnouncementModal />}
      {isCreateAnnouncement && <CreateAnnouncementForm />}

      <Container>
        {announcementsAdvertiser.length === 0 ? (
          <></>
        ) : (
          <>
            <UserProfile
              name={announcementsAdvertiser[0]!.User.name}
              description={announcementsAdvertiser[0]!.User.description}
              viewButton={userId === user?.id}
            />
            <div className="ContainerLists">
              <ContainerListAdvertiser>
                <Heading
                  id="car"
                  className=""
                  tag="h5"
                  style="heading-5"
                  weight="600"
                  color="--color-grey1"
                >
                  Carros
                </Heading>

                <ProductList
                  products={announcementsAdvertiser.filter(
                    (car: IAnnouncement) => car.typeVehicle === "car"
                  )}
                  viewButtons={userId === user?.id}
                />
              </ContainerListAdvertiser>

              <ContainerListAdvertiser>
                <Heading
                  id="motorcycle"
                  className=""
                  tag="h5"
                  style="heading-5"
                  weight="600"
                  color="--color-grey1"
                >
                  Motos
                </Heading>

                <ProductList
                  products={announcementsAdvertiser.filter(
                    (car: IAnnouncement) => car.typeVehicle === "motorcycle"
                  )}
                  viewButtons={userId === user?.id}
                />
              </ContainerListAdvertiser>
            </div>

            <Footer />
          </>
        )}
      </Container>
    </>
  );
};
