import { AuctionCard } from "./AuctionCard";
import { StyledAuctionList } from "./styles";

import { tempDataAuction } from "./tempData";

export const AuctionList = () => {
  return (
    <StyledAuctionList>
      {tempDataAuction.map((auction) => (
        <AuctionCard key={auction.title} auction={auction} />
      ))}
    </StyledAuctionList>
  );
};
