import Clearer from "../components/Clearer";
import Input from "../components/Input";
import List from "../components/List";
import useGift from "../hooks/useGift";
import useModal from "../hooks/useModal";

function Home() {
  const { list, handleAdd, handleRemove, handleClear, handleEdit } = useGift();
  const { handleOpen, handleClose } = useModal();
  return (
    <div className="Home">
      <h1>Regalos:</h1>
      <Input
        onAdd={(
          name: string,
          quantity: number,
          image: string,
          receptor: string
        ) => {
          handleAdd(name, quantity, image, receptor);
          handleClose();
        }}
        onOpen={handleOpen}
      />
      <div className="List">
        <List
          list={list}
          onRemove={handleRemove}
          onOpen={handleOpen}
          onEdit={(
            id: number,
            name: string,
            quantity: number,
            image: string,
            receptor: string
          ) => {
            handleEdit(id, name, quantity, image, receptor);
            handleClose();
          }}
        />
        <Clearer
          onClear={() => {
            handleClear();
            handleClose();
          }}
        />
      </div>
    </div>
  );
}

export default Home;
