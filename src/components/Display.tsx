function Display({ gift }: { gift: Gift }) {
  return (
    <div className="Display">
      <h3>{gift.name}</h3>
      {gift.receptor.length > 0 && <h4>{`Para ${gift.receptor}`}</h4>}
      <span>{`${gift.quantity} ${
        gift.quantity == 1 ? "unidad" : "unidades"
      }`}</span>
      {gift.unitPrice > 0 && (
        <>
          <span>{`$${gift.unitPrice} c/u`}</span>
          <span>{`$${gift.unitPrice * gift.quantity} total`}</span>
        </>
      )}
      <img src={gift.image} alt="" />
    </div>
  );
}

export default Display;
