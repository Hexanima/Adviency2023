import "./App.scss";
import { GiftProvider } from "./context/GiftProvider";
import Home from "./pages/Home";

function App() {
  return (
    <GiftProvider>
      <div className="Background"></div>
      <div className="App">
        <Home />
      </div>
    </GiftProvider>
  );
}

export default App;
