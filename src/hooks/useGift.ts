import { useContext } from "react";
import { GiftContext } from "../context/GiftProvider";

function useGift() {
  return useContext(GiftContext);
}

export default useGift;
