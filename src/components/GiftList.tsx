import {} from "react";

declare interface GiftListParams {
  list: Gift[];
  onRemove: (id: number) => void;
}

function GiftList({ list, onRemove }: GiftListParams) {
  return (
    <>
      {list.length > 0 ? (
        <ul className="GiftList">
          {list.map((gift) => (
            <li key={`${gift.name}.${gift.id}`}>
              <p>{gift.name}</p>
              <span>{"x" + gift.quantity}</span>
              <button onClick={() => onRemove(gift.id)}>X</button>
            </li>
          ))}
        </ul>
      ) : (
        <h5>Aun no hay regalos, agrega uno!</h5>
      )}
    </>
  );
}

export default GiftList;
