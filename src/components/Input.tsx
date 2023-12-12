import { FormEvent, useRef } from "react";

interface InputParams {
  onAdd: (name: string, quantity: number) => void;
}

function Input({ onAdd }: InputParams) {
  let nameRef = useRef<HTMLInputElement>(null);
  let quanityRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (nameRef && nameRef.current && quanityRef && quanityRef.current) {
      onAdd(nameRef.current.value, Number(quanityRef.current.value));
    }
  }

  return (
    <form action="" className="Input" onSubmit={handleSubmit}>
      <input type="text" id="name" ref={nameRef} placeholder="Nombre del regalo"/>
      <input
        type="number"
        name=""
        id="quantity"
        ref={quanityRef}
        min={1}
        defaultValue={1}
      />
      <button>AGREGAR</button>
    </form>
  );
}

export default Input;
