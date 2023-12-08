import { useRef, FormEvent } from "react";

export interface InputParams {
  onAdd: (giftName: string) => void;
}

function Input({ onAdd }: InputParams) {
  const inputEl = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (inputEl && inputEl.current) {
      onAdd(inputEl.current.value);
    }
  }

  return (
    <form className="Input" onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre del regalo" ref={inputEl} />
      <button>AGREGAR</button>
    </form>
  );
}

export default Input;
