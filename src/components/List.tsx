declare interface ListParams {
  list: Gift[];
  onRemove: (id: number) => void;
}

function List({ list, onRemove }: ListParams) {
  return (
    <ul className="List">
      {list.map((gift) => (
        <li key={`${gift.id}.${gift.name}`}>
          <p>{gift.name}</p>
          <button onClick={() => onRemove(gift.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default List;
