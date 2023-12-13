interface DisplayParams {
  item: Gift | null;
  onClose: () => void;
}

function Display({ item, onClose }: DisplayParams) {
  return (
    <div className={`Display ${item && "active"}`}>
      {item && (
        <div className="Container">
          <h2>{item.name}</h2>
          <p>{item.quantity == 1 ? "1 unidad" : item.quantity + " unidades"}</p>
          <img src={item.image} alt="" />
          <button className="Closer" onClick={onClose}>
            X
          </button>
        </div>
      )}
    </div>
  );
}

export default Display;
