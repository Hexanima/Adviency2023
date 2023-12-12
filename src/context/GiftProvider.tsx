import { createContext, useState, ReactNode } from "react";

declare interface GiftContextValues {
  list: Gift[];
  handleAdd: (name: string) => void;
  handleRemove: (id: number) => void;
  handleClear: () => void;
}

export const GiftContext = createContext({} as GiftContextValues);

export function GiftProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState([] as Gift[]);

  function handleAdd(name: string) {
    if (name.length > 0 && !list.some((gift) => gift.name == name)) {
      const id = list.length > 0 ? list[list.length - 1].id + 1 : 0;
      const giftList = [...list];
      giftList.push({ name, id });
      setList(giftList);
    }
  }

  function handleRemove(id: number) {
    const giftList = list.filter((gift) => gift.id != id);
    setList(giftList);
  }

  function handleClear() {
    setList([]);
  }

  const contextValues: GiftContextValues = {
    list,
    handleAdd,
    handleRemove,
    handleClear,
  };
  return (
    <GiftContext.Provider value={contextValues}>
      {children}
    </GiftContext.Provider>
  );
}
