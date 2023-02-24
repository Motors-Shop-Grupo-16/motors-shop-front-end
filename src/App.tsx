import CreateAnnouncementForm from "./components/CreateAnnouncementForm";
import { GlobalStyle } from "./styles/global";
import { ResetStyle } from "./styles/reset";

function App() {
  return (
    <>
      <GlobalStyle />
      <ResetStyle />
      <CreateAnnouncementForm />
    </>
  );
}

export default App;
