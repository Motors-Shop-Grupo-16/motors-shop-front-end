import { AuctionCard } from "../AuctionCard";
import Container from "./style";

import { tempDataAuction } from "./tempData";

export const AuctionList = () => {
  return (
    <Container>
      {tempDataAuction.map((auction) => (
        <AuctionCard key={auction.id} auction={auction} />
      ))}
    </Container>
  );
};
