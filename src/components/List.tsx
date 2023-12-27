import { ReactNode } from "react";
import Display from "./Display";
import Edit from "./Edit";

interface ListParams {
  list: Gift[];
  onRemove: (id: number) => void;
  onOpen: (component: ReactNode) => void;
  onEdit: (editedGift: Gift) => void;
  onDupe: (dupedGift: Partial<Gift>) => void;
}

function List({ list, onRemove, onOpen, onEdit, onDupe }: ListParams) {
  return (
    <>
      {list.length > 0 ? (
        <ul>
          {list.map((gift) => (
            <li key={`${gift.id}.${gift.name}`}>
              <p>{gift.name}</p>
              <span>{"x" + gift.quantity}</span>
              {gift.unitPrice > 0 && (
                <>
                  {gift.quantity > 1 && (
                    <span>{"$" + gift.unitPrice + " c/u"}</span>
                  )}
                  <span>{"$" + gift.unitPrice * gift.quantity}</span>
                </>
              )}
              <button
                className="Open"
                onClick={() => onOpen(<Display gift={gift} />)}
              >
                O
              </button>
              <button
                className="Dupe"
                onClick={() => onOpen(<Edit gift={gift} onEdit={onDupe} />)}
              >
                D
              </button>
              <button
                className="Edit"
                onClick={() => onOpen(<Edit gift={gift} onEdit={onEdit} />)}
              >
                E
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
