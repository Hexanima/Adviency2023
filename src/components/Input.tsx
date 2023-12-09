import { useRef, FormEvent } from "react";

declare interface InputParams {
  onAdd: (name: string) => void;
}

function Input({ onAdd }: InputParams) {
  const inputEl = useRef<HTMLInputElement>(null);
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (inputEl && inputEl.current) {
      onAdd(inputEl.current.value);
      inputEl.current.value = "";
    }
  }
  return (
    <form action="" className="Input" onSubmit={handleSubmit}>
      <input ref={inputEl} type="text" />
      <button>AGREGAR</button>
    </form>
  );
}

export default Input;
