export interface Gift {
  id: number;
  name: string;
}

export interface GiftListParams {
  list: Gift[];
  onRemove: (id: number) => void;
}

function GiftList({ list, onRemove }: GiftListParams) {
  return (
    <ul className="GiftList">
      {list.map((gift) => (
        <li key={`${gift.id}.${gift.name}`}>
          <p>{gift.name}</p>
          <button
            onClick={() => {
              onRemove(gift.id);
            }}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default GiftList;
