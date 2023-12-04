import List, { Gift } from "./components/List";
import "./styles.css";

export default function App() {
  let giftList: Gift[] = [
    { name: "Pelota" },
    { name: "Muñeca" },
    { name: "PS5" },
  ];
  return (
    <div className="App">
      <div className="Container">
        <h1>Regalos:</h1>
        <List list={giftList} />
      </div>
    </div>
  );
}
