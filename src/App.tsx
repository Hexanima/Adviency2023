import "./App.scss";
import { GiftProvider } from "./context/GiftProvider";
import { ModalProvider } from "./context/ModalProvider";
import Home from "./pages/Home";

function App() {
  return (
    <ModalProvider>
      <GiftProvider>
        <div className="Background"></div>
        <div className="App">
          <Home />
          <ModalProvider.Handler/>
        </div>
      </GiftProvider>
    </ModalProvider>
  );
}

export default App;
