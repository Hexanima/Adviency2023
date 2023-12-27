import { ReactNode, useRef } from "react";

interface VisualizeParams {
  list: Gift[];
  onOpen: (component: ReactNode) => void;
}

function Visualize({ list, onOpen }: VisualizeParams) {
  return (
    <button
      className="Visualize"
      onClick={() => onOpen(<Visualize.List list={list} />)}
    >
      VISUALIZAR
    </button>
  );
}

Visualize.List = function ({ list }: { list: Gift[] }) {
  const listRef = useRef<HTMLUListElement>(null);
  const priRef = useRef<HTMLIFrameElement>(null);
  function handlePrint() {
    let pri = priRef.current?.contentWindow;
    if (pri) {
      pri.document.open();
      pri.document.write(listRef.current?.innerHTML || "");
      pri.document.close();
      pri.focus();
      pri.print();
    }
  }
  return (
    <>
      {list.length > 0 ? (
        <div className="Visualizer">
          <ul ref={listRef}>
            {list.map((gift) => (
              <li key={`${gift.id}.${gift.name}`}>
                <p>{gift.name}</p>
                <span>{"x" + gift.quantity}</span>
              </li>
            ))}
          </ul>
          <button onClick={handlePrint}>IMPRIMIR</button>
          <iframe
            ref={priRef}
            style={{ height: "0px", width: "0px", position: "absolute" }}
          ></iframe>
        </div>
      ) : (
        <h5>Aun no hay regalos, agrega uno!</h5>
      )}
    </>
  );
};

export default Visualize;
