import Clearer from "../components/Clearer";
import Input from "../components/Input";
import List from "../components/List";
import useGift from "../hooks/useGift";

function Home() {
  const { list, handleAdd, handleRemove, handleClear } = useGift();
  return (
    <div className="Home">
      <h1>Regalos:</h1>
      <Input onAdd={handleAdd} />
      <div className="List">
        <List list={list} onRemove={handleRemove} />
        {list.length > 0 && <Clearer onClear={handleClear} />}
      </div>
    </div>
  );
}

export default Home;
