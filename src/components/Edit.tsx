import { FormEvent, useRef } from "react";
import { generateName } from "../utils/gift.utils";

interface EditParams {
  gift: Gift;
  onEdit: (editedGift: Gift) => void;
}

function Edit({ onEdit, gift }: EditParams) {
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
      onEdit({
        id: gift.id,
        image,
        receptor,
        name: nameRef.current.value,
        quantity: Number(quantityRef.current.value),
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
        <input
          type="text"
          placeholder="Nombre del regalo"
          ref={nameRef}
          defaultValue={gift.name}
        />
        <span onClick={handleRandom}>SORPRENDEME</span>
      </div>
      <input
        type="text"
        placeholder="Destinatario"
        ref={receptorRef}
        defaultValue={gift.receptor}
      />
      <input
        type="text"
        placeholder="URL de la imagen"
        ref={imageRef}
        defaultValue={gift.image}
      />
      <input
        type="number"
        placeholder="Precio unitario"
        ref={priceRef}
        defaultValue={gift.unitPrice}
        step=".01"
      />
      <div className="mini">
        <input
          type="number"
          placeholder="Cantidad de regalos"
          ref={quantityRef}
          defaultValue={gift.quantity}
        />
        <button>MODIFICAR</button>
      </div>
    </form>
  );
}

export default Edit;
