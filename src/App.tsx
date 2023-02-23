import { AnnouncementProvider } from "./contexts/Annoucement";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/global";
import { ResetStyle } from "./styles/reset";

function App() {
  return (
    <AnnouncementProvider>
      <GlobalStyle />
      <ResetStyle />
      <RoutesMain />
    </AnnouncementProvider>
  );
}

export default App;
