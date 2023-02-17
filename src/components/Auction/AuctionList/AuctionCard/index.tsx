import { BsArrowRight } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { BodyText, Heading } from "../../../../styles/typography";
import { StyledAuctionCard } from "./styles";

// Alterar interfaces para o local apropriado depois
interface IAuction {
  time: string;
  title: string;
  imageUrl: string;
  description: string;
  owner: string;
  year: string;
  mileage: string;
  price: string;
}

interface IAuctionObj {
  auction: IAuction;
}

export const AuctionCard = ({ auction }: IAuctionObj) => {
  function handleClick() {
    console.log("Ir Para pagina action");
  }
  return (
    <StyledAuctionCard imageUrl={auction.imageUrl}>
      <div className="auction-content">
        <div className="auction-time">
          <FiClock color="var(--color-brand1)" size={24} />
          <Heading
            className=""
            tag="h6"
            style="heading-7"
            weight="500"
            color="--color-grey1"
          >
            {auction.time}
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
            <BodyText
              className=""
              tag="p"
              style="body-2"
              weight="500"
              color="--color-whiteFixed"
            >
              {auction.owner[0]}
            </BodyText>
          </div>
          <BodyText
            className=""
            tag="p"
            style="body-2"
            weight="500"
            color="--color-whiteFixed"
          >
            {auction.owner}
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
              {auction.mileage}
            </BodyText>
          </div>
          <Heading
            className="auction-title"
            tag="h6"
            style="heading-7"
            weight="500"
            color="--color-whiteFixed"
          >
            {auction.price}
          </Heading>
        </div>
      </div>

      <div className="auction-nav" onClick={() => handleClick()}>
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
      </div>
    </StyledAuctionCard>
  );
};