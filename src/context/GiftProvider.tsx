import { createContext, ReactNode, useState } from "react";
import { Gift } from "../components/GiftList";

interface GiftContextValues {
  giftList: Gift[];
  handleAdd: (giftName: string) => void;
  handleRemove: (id: number) => void;
}

export const GiftContext = createContext({} as GiftContextValues);

export function GiftProvider({ children }: { children: ReactNode }) {
  const [giftList, setGiftList] = useState([] as Gift[]);

  function handleAdd(giftName: string) {
    const newList: Gift[] = [...giftList];
    const listLength = newList.length;
    const newId: number = listLength > 0 ? giftList[listLength - 1].id + 1 : 0;
    newList.push({ name: giftName, id: newId });
    setGiftList(newList);
  }

  function handleRemove(id: number) {
    const newList: Gift[] = giftList.filter((gift) => gift.id != id);

    setGiftList(newList);
  }

  const contextValues: GiftContextValues = {
    giftList,
    handleAdd,
    handleRemove,
  };

  return (
    <GiftContext.Provider value={contextValues}>
      {children}
    </GiftContext.Provider>
  );
}
