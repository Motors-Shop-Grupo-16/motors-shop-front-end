import { useContext } from "react";
import { AnnouncementContext } from "../../../contexts/AnnouncementContext";
import EmptyList from "../../EmptyList";
import { AuctionCard } from "../AuctionCard";
import Container from "./style";

export const AuctionList = () => {
  const { auctions } = useContext(AnnouncementContext);

  return (
    <Container>
      {auctions.length == 0 ? (
        <EmptyList>No momento não temos nenhum leilão disponível.</EmptyList>
      ) : (
        auctions.map((auction) => (
          <AuctionCard key={auction.id} auction={auction} />
        ))
      )}
    </Container>
  );
};
