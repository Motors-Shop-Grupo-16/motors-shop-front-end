import { useContext, useLayoutEffect, useMemo } from "react";
import { Heading } from "../../styles/typography";
import { Container, ContainerListAdvertiser } from "./style";

import { useLocation } from "react-router-dom";
import { AuctionList } from "../../components/Auction/AuctionList";
import CreateAnnouncementForm from "../../components/CreateAnnouncementForm";
import DeleteAnnouncementModal from "../../components/DeleteAnnouncementModal";
import Footer from "../../components/Footer";
import ProductList from "../../components/Product/ProductList";
import UpdateAnnouncementForm from "../../components/UpdateAnnouncementForm";
import UserProfile from "../../components/UserProfile";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { IAnnouncement } from "../../contexts/AnnouncementContext.interfaces";
import { UserContext } from "../../contexts/UserContext";

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

  useLayoutEffect(() => {
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
              <ContainerListAdvertiser className="home-auction">
                <Heading
                  id="auction"
                  className=""
                  tag="h5"
                  style="heading-5"
                  weight="600"
                  color="--color-grey1"
                >
                  Leilão
                </Heading>

                <AuctionList
                  auctions={announcementsAdvertiser.filter(
                    (auction: IAnnouncement) => auction.typeSale === "auction"
                  )}
                  viewButtons={userId === user?.id}
                />
              </ContainerListAdvertiser>

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
                    (car: IAnnouncement) =>
                      car.typeVehicle === "car" && car.typeSale === "sale"
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
                    (motorcycle: IAnnouncement) =>
                      motorcycle.typeVehicle === "motorcycle" &&
                      motorcycle.typeSale === "sale"
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
