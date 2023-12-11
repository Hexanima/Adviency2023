import { FormEvent, useRef } from "react";

declare interface InputParams {
  onAdd: (name: string) => void;
}

function Input({ onAdd }: InputParams) {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (inputRef && inputRef.current) {
      onAdd(inputRef.current.value);
    }
  }
  return (
    <form action="" className="Input" onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre del regalo" ref={inputRef} />
      <button>AGREGAR </button>
    </form>
  );
}

export default Input;