import { Gift } from "../../globals";

export interface ListPropParams {
  list: Gift[];
}

function GiftList({ list }: ListPropParams) {
  return (
    <ul className="List">
      {list.length > 0 &&
        list.map((gift) => <li key={`Gift${gift.name}`}>{gift.name}</li>)}
    </ul>
  );
}

export default GiftList;
