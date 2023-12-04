export interface Gift {
  name: string;
}

export interface GiftListProps {
  list: Gift[];
}

function GiftList({ list }: GiftListProps) {
  return (
    <ul>
      {list.map((gift) => (
        <li key={`Gift${gift.name}`}>{gift.name}</li>
      ))}
    </ul>
  );
}

export default GiftList;
