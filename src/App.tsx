import GiftList, { Gift } from "./components/GiftList";
import "./styles.css";

export default function App() {
  let giftList: Gift[] = [
    { name: "Peluche" },
    { name: "Pelota" },
    { name: "Bicicleta" },
  ];
  return (
    <div className="App">
      <h1>Regalos:</h1>
      <GiftList list={giftList} />
    </div>
  );
}
