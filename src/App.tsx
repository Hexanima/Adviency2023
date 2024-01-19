import "./App.scss";
import Snowflakes from "./components/Snowflakes";
import { ModalProvider } from "./context/ModalProvider";
import useGift from "./hooks/useGift";
import Home from "./pages/Home";

function App() {
  const { isLoaded } = useGift();
  return (
    <>
      <div className="Background">
        {!isLoaded && <div className="loading"></div>}

        <Snowflakes/>
      </div>
      {isLoaded && (
        <>
          <div className="App">
            <Home />
            <ModalProvider.Handler />
          </div>
        </>
      )}
    </>
  );
}

export default App;
