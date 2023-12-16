import { FormEvent, ReactNode, useRef } from "react";

interface InputParams {
  onAdd: (name: string, quantity: number, image: string) => void;
  onOpen: (component: ReactNode) => void;
}

function Input({ onAdd, onOpen }: InputParams) {
  return (
    <button
      className="Input"
      onClick={() => onOpen(<InputForm onAdd={onAdd} />)}
    >
      AGREGAR UN REGALO
    </button>
  );
}

interface InputFormParams {
  onAdd: (name: string, quantity: number, image: string) => void;
}

function InputForm({ onAdd }: InputFormParams) {
  const nameRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (
      nameRef?.current?.value?.length &&
      nameRef?.current?.value?.length > 0 &&
      quantityRef?.current?.value?.length &&
      quantityRef?.current?.value?.length > 0
    ) {
      let img =
        imageRef.current?.value ||
        "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/512px/1f381.png";

      onAdd(nameRef.current.value, Number(quantityRef.current.value), img);
    }
  }

  return (
    <form action="" className="InputForm" onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre del regalo" ref={nameRef} />
      <input type="text" placeholder="URL de la imagen" ref={imageRef} />
      <div className="mini">
        <input
          type="number"
          placeholder="Cantidad de regalos"
          ref={quantityRef}
        />
        <button>AGREGAR</button>
      </div>
    </form>
  );
}

export default Input;
