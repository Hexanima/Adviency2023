declare interface GiftListParams {
  list: Gift[];
  onRemove: (id: number) => void;
}

function GiftList({ list, onRemove }: GiftListParams) {
  return (
    <ul className="GiftList">
      {list.length > 0 ? (
        list.map((gift) => (
          <li key={`${gift.id}.${gift.name}`}>
            <p>{gift.name}</p>
            <button onClick={() => onRemove(gift.id)}>X</button>
          </li>
        ))
      ) : (
        <h5>Aun no hay regalos, agrega uno!</h5>
      )}
    </ul>
  );
}

export default GiftList;
