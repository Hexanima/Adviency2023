import { GiftContext } from "../context/GiftProvider";
import { useContext } from "react";

function useGift() {
  return useContext(GiftContext);
}

export default useGift;
