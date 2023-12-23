import "./App.scss";
import { ModalProvider } from "./context/ModalProvider";
import useGift from "./hooks/useGift";
import Home from "./pages/Home";

function App() {
  const { isLoaded } = useGift();
  return (
    <>
      <div className="Background">
        {!isLoaded && <div className="loading"></div>}
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
