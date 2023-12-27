import Clearer from "../components/Clearer";
import Input from "../components/Input";
import List from "../components/List";
import MusicPlayer from "../components/MusicPlayer";
import Visualize from "../components/Visualize";
import useGift from "../hooks/useGift";
import useModal from "../hooks/useModal";

function Home() {
  const { list, handleAdd, handleRemove, handleClear, handleEdit } = useGift();
  const { handleOpen, handleClose } = useModal();
  return (
    <div className="Home">
      <h1>Regalos:</h1>
      <Input
        onAdd={(newGift: Partial<Gift>) => {
          handleAdd(newGift);
          handleClose();
        }}
        onOpen={handleOpen}
      />
      <div className="List">
        <List
          list={list}
          onRemove={(id: number) => {
            handleRemove(id);
            handleClose();
          }}
          onOpen={handleOpen}
          onEdit={(editedGift: Gift) => {
            handleEdit(editedGift);
            handleClose();
          }}
          onDupe={(dupedGift: Partial<Gift>) => {
            handleAdd(dupedGift);
            handleClose();
          }}
        />
        {list.length > 0 && (
          <h5>
            Total: $
            {list.reduce((total, gift) => {
              return total + gift.unitPrice * gift.quantity;
            }, 0)}
          </h5>
        )}

        {list.length > 0 && (
          <>
            <Visualize list={list} onOpen={handleOpen} />
            <Clearer
              onClear={() => {
                handleClear();
                handleClose();
              }}
            />
          </>
        )}
      </div>
      <MusicPlayer/>
    </div>
  );
}

export default Home;
