import { AnnouncementProvider } from "./contexts/AnnouncementContext";
import { UserProvider } from "./contexts/UserContext";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/global";
import { ResetStyle } from "./styles/reset";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <UserProvider>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#343b41",
            color: "white",
          },
        }}
      />
      <AnnouncementProvider>
        <GlobalStyle />
        <ResetStyle />
        <RoutesMain />
      </AnnouncementProvider>
    </UserProvider>
  );
}

export default App;
