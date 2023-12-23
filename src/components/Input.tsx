import { FormEvent, ReactNode, useRef } from "react";
import { generateName } from "../utils/gift.utils";

interface InputParams {
  onAdd: (newGift: Partial<Gift>) => void;
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
  onAdd: (newGift: Partial<Gift>) => void;
}

function InputForm({ onAdd }: InputFormParams) {
  const nameRef = useRef<HTMLInputElement>(null);
  const receptorRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (
      nameRef?.current?.value?.length &&
      nameRef?.current?.value?.length > 0 &&
      quantityRef?.current?.value?.length &&
      quantityRef?.current?.value?.length > 0
    ) {
      let image =
        imageRef.current?.value ||
        "https://images.emojiterra.com/google/noto-emoji/unicode-15.1/color/512px/1f381.png";

      let receptor = receptorRef.current?.value || "";
      onAdd({
        name: nameRef.current.value,
        quantity: Number(quantityRef.current.value),
        image,
        receptor,
        unitPrice: Number(priceRef.current?.value || 0),
      });
    }
  }

  function handleRandom() {
    if (nameRef?.current) {
      const name = generateName();
      nameRef.current.value = name;
    }
  }

  return (
    <form action="" className="InputForm" onSubmit={handleSubmit}>
      <div className="mini">
        <input type="text" placeholder="Nombre del regalo" ref={nameRef} />
        <span onClick={handleRandom}>SORPRENDEME</span>
      </div>
      <input type="text" placeholder="Destinatario" ref={receptorRef} />
      <input type="text" placeholder="URL de la imagen" ref={imageRef} />
      <input type="number" placeholder="Precio unitario" ref={priceRef} step=".01" />
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
