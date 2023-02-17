import { AuctionList } from "./components/Auction/AuctionList";
import { Container } from "./components/Container";
import { GlobalStyle } from "./styles/global";
import { ResetStyle } from "./styles/reset";

function App() {
  return (
    <>
      <GlobalStyle />
      <ResetStyle />
      <Container>
        <AuctionList />
      </Container>
    </>
  );
}

export default App;
