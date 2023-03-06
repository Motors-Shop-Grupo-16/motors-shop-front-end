import { useContext, useEffect, useMemo } from "react";
import { Heading } from "../../styles/typography";
import { Container, ContainerListAdvertiser } from "./style";

import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import ProductList from "../../components/Product/ProductList";
import UserProfile from "../../components/UserProfile";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { IAnnouncement } from "../../contexts/AnnouncementContext.interfaces";

export const Advertiser = () => {
  const { announcementsAdvertiser, listAnnouncementsByIdAdvertiser } =
    useContext(AnnouncementContext);

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }
  const userId = useQuery().get("user");

  useEffect(() => {
    listAnnouncementsByIdAdvertiser(userId!);
  }, [userId]);

  return (
    <>
      <Container>
        {announcementsAdvertiser.length === 0 ? (
          <></>
        ) : (
          <>
            <UserProfile
              name={announcementsAdvertiser[0]!.User.name}
              description={announcementsAdvertiser[0]!.User.description}
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
