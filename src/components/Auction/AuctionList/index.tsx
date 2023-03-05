import EmptyList from "../../EmptyList";
import { AuctionCard } from "../AuctionCard";
import Container from "./style";

import { tempDataAuction } from "./tempData";

export const AuctionList = () => {
  return (
    <Container>
      {tempDataAuction.length == 0 ? (
        <EmptyList>No momento não temos nenhum leilão disponível.</EmptyList>
      ) : (
        tempDataAuction.map((auction) => (
          <AuctionCard key={auction.id} auction={auction} />
        ))
      )}
    </Container>
  );
};
