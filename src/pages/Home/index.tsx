import Input from "../../components/Input";
import GiftList from "../../components/List";
import useGift from "../../hooks/useGift";
import "./home.module.css";

function Home() {
  const { list, handleAdd } = useGift();
  return (
    <div className="Home">
      <h1>Regalos:</h1>
      <Input addFunction={handleAdd} />
      <GiftList list={list} />
    </div>
  );
}

export default Home;
