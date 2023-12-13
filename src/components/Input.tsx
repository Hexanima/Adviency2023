import { useRef, FormEvent } from "react";

interface InputParams {
  onAdd: (name: string, quantity: number, image: string) => void;
}

function Input({ onAdd }: InputParams) {
  let nameRef = useRef<HTMLInputElement>(null);
  let imageRef = useRef<HTMLInputElement>(null);
  let quantityRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (nameRef?.current && imageRef?.current && quantityRef?.current) {
      onAdd(
        nameRef.current.value,
        Number(quantityRef.current.value),
        imageRef.current.value
      );
      nameRef.current.value = "";
      imageRef.current.value = "";
      quantityRef.current.value = "1";
    }
  }
  return (
    <form action="" className="Input" onSubmit={handleSubmit}>
      <input
        type="text"
        className="text"
        placeholder="Nombre del regalo"
        ref={nameRef}
      />
      <input
        type="text"
        className="text"
        placeholder="URL de imagen"
        ref={imageRef}
      />
      <input
        type="number"
        className="number"
        ref={quantityRef}
        min={1}
        defaultValue={1}
      />
      <button>AGREGAR</button>
    </form>
  );
}

export default Input;
