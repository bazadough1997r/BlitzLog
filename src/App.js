import { ScrollToTop } from "./Components";
import Home from "./Views/Home/Home";
import CachePosition from "./Utils/CachePosition/CachePosition";

const App = () => {
  return (
    <>
      <Home />
      <ScrollToTop />
      <CachePosition />
    </>
  );
};

export default App;
