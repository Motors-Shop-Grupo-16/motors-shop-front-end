import { IAnnouncement } from "../../../contexts/AnnouncementContext.interfaces";
import EmptyList from "../../EmptyList";
import { AuctionCard } from "../AuctionCard";
import Container from "./style";

export const AuctionList = ({
  auctions,
  viewButtons,
}: {
  auctions: IAnnouncement[];
  viewButtons?: boolean;
}) => {
  return (
    <Container>
      {auctions.length == 0 ? (
        <EmptyList>No momento não têm leilões cadastrados</EmptyList>
      ) : (
        auctions.map((auction) => (
          <AuctionCard
            key={auction.id}
            auction={auction}
            viewButtons={viewButtons}
          />
        ))
      )}
    </Container>
  );
};
