import { FormEvent, FormEventHandler, useRef } from "react";

function Input({ addFunction }: { addFunction: (giftName: string) => void }) {
  const input = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (input && input.current) {
      let newElem = input.current.value;

      addFunction(newElem);
    }
  }

  return (
    <form className="Input" onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre del regalo" ref={input} />
      <button>Agregar</button>
    </form>
  );
}

export default Input;
