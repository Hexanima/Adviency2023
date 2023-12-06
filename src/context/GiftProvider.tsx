import { ReactNode, createContext, useState } from "react";
import { Gift } from "../globals";

interface GiftContextParams {
  list: Gift[];
  handleAdd: (giftName: string) => void;
}

export const GiftContext = createContext({} as GiftContextParams);

export function GiftProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState<Gift[]>([]);

  const handleAdd = (giftName: string) => {
    const newList: Gift[] = [...list];
    newList.push({ name: giftName, id: list.length });
    setList(newList);
  };

  const contextValues: GiftContextParams = { list, handleAdd };

  return (
    <GiftContext.Provider value={contextValues}>
      {children}
    </GiftContext.Provider>
  );
}
