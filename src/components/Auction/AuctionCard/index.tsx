import { BsArrowRight } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { BodyText, Heading } from "../../../styles/typography";
import { IAnnouncement } from "../../../contexts/AnnouncementContext.interfaces";
import Container from "./style";
import UserImage from "../../UserImage/userImage";
import dateFormatter from "../../../utils/dateFormatter";
import Button from "../../Button";
import { useContext } from "react";
import { AnnouncementContext } from "../../../contexts/AnnouncementContext";

export const AuctionCard = ({
  auction,
  viewButtons,
}: {
  auction: IAnnouncement;
  viewButtons?: boolean;
}) => {
  const { setAnnouncement, goTo, setIsUpdateAnnouncement } =
    useContext(AnnouncementContext);

  return (
    <Container imageUrl={auction.coverImage}>
      <div className="auction-content">
        <div className="auction-time">
          <FiClock color="var(--color-brand1)" size={20} />
          <Heading
            className=""
            tag="p"
            style="heading-7"
            weight="500"
            color="--color-grey1"
          >
            {dateFormatter(auction.updatedAt)}
          </Heading>
        </div>

        <Heading
          className="auction-title"
          tag="h6"
          style="heading-6"
          weight="600"
          color="--color-grey10"
        >
          {auction.title}
        </Heading>

        <BodyText
          className="auction-description"
          tag="p"
          style="body-1"
          weight="400"
          color="--color-grey5"
        >
          {auction.description}
        </BodyText>

        <div className="auction-author">
          <div className="auction-author-icon">
            <UserImage className="productUserImage" name={auction.User.name} />
          </div>
          <BodyText
            className=""
            tag="p"
            style="body-2"
            weight="500"
            color="--color-whiteFixed"
          >
            {auction.User.name}
          </BodyText>
        </div>

        <div className="auction-info">
          <div className="auction-info-year-mileage">
            <BodyText
              className="auction-info-year"
              tag="p"
              style="body-2"
              weight="500"
              color="--color-brand1"
            >
              {auction.year}
            </BodyText>
            <BodyText
              className="auction-info-mileage"
              tag="p"
              style="body-2"
              weight="500"
              color="--color-brand1"
            >
              {auction.mileage} KM
            </BodyText>
          </div>
          <Heading
            className="auction-title"
            tag="h6"
            style="heading-7"
            weight="500"
            color="--color-whiteFixed"
          >
            {`R$ ${auction.price}`}
          </Heading>
        </div>
      </div>

      <div
        className="auction-nav"
        onClick={() => {
          goTo(`/product?announcement=${auction.id}`);
        }}
      >
        {viewButtons ? (
          <div className="productButtonsContainer">
            <Button
              type="button"
              width="fit-content"
              buttonText=""
              backgroundColor="--color-grand1"
              color="--color-grey10"
              borderColor="--color-grey10"
              borderLength="2px"
              onClick={() => {
                setAnnouncement(auction);
                setIsUpdateAnnouncement(true);
              }}
            >
              Editar
            </Button>

            <Button
              type="button"
              width="fit-content"
              buttonText=""
              backgroundColor="--color-grand1"
              color="--color-grey10"
              borderColor="--color-grey10"
              borderLength="2px"
              onClick={() => {
                goTo(`/product?announcement=${auction.id}`);
              }}
            >
              Ver como
            </Button>
          </div>
        ) : (
          <>
            <BodyText
              className="auction-info-mileage"
              tag="p"
              style="body-1"
              weight="600"
              color="--color-whiteFixed"
            >
              Acessar página do leilão
            </BodyText>
            <BsArrowRight color="var(--color-whiteFixed)" size={24} />
          </>
        )}
      </div>
    </Container>
  );
};
