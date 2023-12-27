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
        <img
          src="https://i.pinimg.com/originals/95/58/b9/9558b95660d31cdbfb19167da2a707f4.gif"
          alt=""
        />
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
