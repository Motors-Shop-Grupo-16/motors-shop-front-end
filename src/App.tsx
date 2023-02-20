import ProductList from "./components/Product/ProductList";

import { GlobalStyle } from "./styles/global";
import { ResetStyle } from "./styles/reset";

function App() {
  return (
    <>
      <GlobalStyle />
      <ResetStyle />
      <ProductList />
    </>
  );
}

export default App;
