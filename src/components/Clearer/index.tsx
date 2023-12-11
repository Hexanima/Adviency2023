declare interface ClearerParams {
  onClear: () => void;
}

function Clearer({ onClear }: ClearerParams) {
  return (
    <button className="Clearer" onClick={onClear}>
      VACIAR LISTA
    </button>
  );
}

export default Clearer;
