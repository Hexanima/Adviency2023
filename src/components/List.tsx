import { ReactNode } from "react";
import Display from "./Display";

interface ListParams {
  list: Gift[];
  onRemove: (id: number) => void;
  onOpen: (component: ReactNode) => void;
}

function List({ list, onRemove, onOpen }: ListParams) {
  return (
    <>
      {list.length > 0 ? (
        <ul>
          {list.map((gift) => (
            <li key={`${gift.id}.${gift.name}`}>
              <p>{gift.name}</p>
              <span>{"x" + gift.quantity}</span>
              <button
                className="Open"
                onClick={() => onOpen(<Display gift={gift} />)}
              >
                O
              </button>
              <button className="Delete" onClick={() => onRemove(gift.id)}>
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
