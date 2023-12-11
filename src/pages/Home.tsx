import Clearer from "../components/Clearer";
import GiftList from "../components/GiftList";
import Input from "../components/Input";
import useGift from "../hooks/useGift";
function Home() {
  const { list, handleAdd, handleRemove, handleClear } = useGift();
  return (
    <div className="Home">
      <h1>Regalos:</h1>
      <Input onAdd={handleAdd} />
      <GiftList list={list} onRemove={handleRemove} />
      <Clearer onClear={handleClear} />
    </div>
  );
}

export default Home;
