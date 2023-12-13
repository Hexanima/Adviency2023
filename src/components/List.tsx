interface ListParams {
  list: Gift[];
  onRemove: (id: number) => void;
  onOpen: (id: number) => void;
}

function List({ list, onRemove, onOpen }: ListParams) {
  return (
    <>
      {list.length > 0 ? (
        <ul>
          {list.map((gift) => (
            <li key={`${gift.id}.${gift.name}`}>
              <p>{gift.name}</p>
              <span>{gift.quantity}</span>
              <button className="open" onClick={() => onOpen(gift.id)}>
                O
              </button>
              <button className="close" onClick={() => onRemove(gift.id)}>
                X
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h5>Aun no hay regalos, agrega uno!</h5>
      )}
    </>
  );
}

export default List;
