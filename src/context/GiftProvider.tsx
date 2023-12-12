import { ReactNode, createContext, useState } from "react";

declare interface GiftContextValues {
  list: Gift[];
  handleAdd: (name: string, quantity: number) => void;
  handleRemove: (id: number) => void;
  handleClear: () => void;
}

export const GiftContext = createContext({} as GiftContextValues);

export function GiftProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState([] as Gift[]);

  function handleAdd(name: string, quantity: number) {
    if (name.length > 0 && !list.some((gift) => gift.name == name)) {
      const newList = [...list];
      const id = list.length > 0 ? newList[newList.length - 1].id + 1 : 1;
      newList.push({ name, quantity, id });
      setList(newList);
    }
  }

  function handleRemove(id: number) {
    const newList = list.filter((gift) => gift.id != id);
    setList(newList);
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
