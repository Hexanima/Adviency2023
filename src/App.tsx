import { GiftProvider } from "./context/GiftProvider";
import Home from "./pages/Home";
import "./styles.css";

export default function App() {
  return (
    <GiftProvider>
      <div className="App">
        <Home />
      </div>
    </GiftProvider>
  );
}
