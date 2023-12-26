import { ReactNode } from "react";

interface VisualizeParams {
  list: Gift[];
  onOpen: (component: ReactNode) => void;
}

function Visualize({ list, onOpen }: VisualizeParams) {
  return (
    <button className="Visualize" onClick={() => onOpen(<Visualize.List list={list} />)}>
      VISUALIZAR
    </button>
  );
}

Visualize.List = function ({ list }: { list: Gift[] }) {
  return (
    <>
      {list.length > 0 ? (
        <ul className="Visualizer">
          {list.map((gift) => (
            <li key={`${gift.id}.${gift.name}`}>
              <p>{gift.name}</p>
              <span>{"x" + gift.quantity}</span>
            </li>
          ))}
        </ul>
      ) : (
        <h5>Aun no hay regalos, agrega uno!</h5>
      )}
    </>
  );
};

export default Visualize;
