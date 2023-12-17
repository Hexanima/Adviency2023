function Display({ gift }: { gift: Gift }) {
  return (
    <div className="Display">
      <h4>{gift.name}</h4>
      {gift.receptor.length > 0 && <h5>{`Para ${gift.receptor}`}</h5>}
      <span>{gift.quantity}</span>
      <img src={gift.image} alt="" />
    </div>
  );
}

export default Display;
