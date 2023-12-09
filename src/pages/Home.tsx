import Clearer from "../components/Clearer";
import Input from "../components/Input";
import List from "../components/List";
import useGift from "../hooks/useGift";

function Home() {
  const { list, handleRemove, handleAdd, removeAll } = useGift();
  return (
    <div className="Home">
      <h1>Regalos:</h1>
      <Input onAdd={handleAdd} />
      <List list={list} onRemove={handleRemove} />
      <Clearer onClear={removeAll} />
    </div>
  );
}

export default Home;
