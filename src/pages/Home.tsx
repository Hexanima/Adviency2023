import Clearer from "../components/Clearer";
import Display from "../components/Display";
import Input from "../components/Input";
import List from "../components/List";
import useGift from "../hooks/useGift";

function Home() {
  const {
    list,
    selected,
    handleAdd,
    handleRemove,
    handleClear,
    handleClose,
    handleOpen,
  } = useGift();
  return (
    <div className="Home">
      <div className="Menu">
        <h1>Regalos:</h1>
        <Input onAdd={handleAdd} />
        <div className="List">
          <List list={list} onRemove={handleRemove} onOpen={handleOpen} />
          {list.length > 0 && <Clearer onClear={handleClear} />}
        </div>
      </div>
      <Display item={selected} onClose={handleClose} />
    </div>
  );
}

export default Home;
