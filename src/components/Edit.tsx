import { FormEvent, useRef } from "react";

interface EditParams {
  gift: Gift;
  onEdit: (
    id: number,
    name: string,
    quantity: number,
    image: string,
    receptor: string
  ) => void;
}

function Edit({ onEdit, gift }: EditParams) {
  const nameRef = useRef<HTMLInputElement>(null);
  const receptorRef = useRef<HTMLInputElement>(null);
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

      let receptor = receptorRef.current?.value || "";
      onEdit(
        gift.id,
        nameRef.current.value,
        Number(quantityRef.current.value),
        img,
        receptor
      );
    }
  }

  return (
    <form action="" className="InputForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del regalo"
        ref={nameRef}
        defaultValue={gift.name}
      />
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
      <div className="mini">
        <input
          type="number"
          placeholder="Cantidad de regalos"
          ref={quantityRef}
          defaultValue={gift.quantity}
        />
        <button>AGREGAR</button>
      </div>
    </form>
  );
}

export default Edit;
