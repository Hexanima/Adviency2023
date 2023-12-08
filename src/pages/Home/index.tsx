import GiftList from "../../components/GiftList";
import Input from "../../components/Input";
import useGift from "../../hooks/useGift";

function Home() {
  const { giftList, handleAdd, handleRemove } = useGift();
  return (
    <div className="Home">
      <h1>Regalos:</h1>
      <Input onAdd={handleAdd} />
      <GiftList list={giftList} onRemove={handleRemove}/>
    </div>
  );
}

export default Home;
