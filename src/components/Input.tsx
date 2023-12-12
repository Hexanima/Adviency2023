import { FormEvent, useRef } from "react";

declare interface InputParams {
  onAdd: (name: string, quantity: number) => void;
}

function Input({ onAdd }: InputParams) {
  const nameRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  function handleAdd(event: FormEvent) {
    event.preventDefault();
    if (nameRef && nameRef.current && quantityRef && quantityRef.current) {
      onAdd(nameRef.current.value, Number(quantityRef.current.value));

      nameRef.current.value = "";
      quantityRef.current.value = "1";
    }
  }

  return (
    <form action="" className="Input" onSubmit={handleAdd}>
      <input
        type="text"
        id="name"
        placeholder="Nombre del regalo"
        ref={nameRef}
      />
      <input
        type="number"
        name=""
        id="quantity"
        min={1}
        defaultValue={1}
        ref={quantityRef}
      />
      <button>AGREGAR</button>
    </form>
  );
}

export default Input;
