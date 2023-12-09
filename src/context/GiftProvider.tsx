import { ReactNode, createContext, useState } from "react";

declare interface GiftContextValues {
  list: Gift[];
  handleAdd: (name: string) => void;
  handleRemove: (id: number) => void;
  removeAll: () => void;
}

export const GiftContext = createContext({} as GiftContextValues);

export function GiftProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState([{ name: "Hola", id: 1 }] as Gift[]);

  function handleAdd(name: string) {
    const lastItem = list[list.length - 1];
    const newList = [...list];
    newList.push({ name, id: list.length > 0 ? lastItem.id + 1 : 0 });
    setList(newList);
  }

  function handleRemove(id: number) {
    const newList = list.filter((gift) => gift.id != id);
    setList(newList);
  }

  function removeAll() {
    setList([]);
  }

  const contextValues: GiftContextValues = {
    list,
    handleAdd,
    handleRemove,
    removeAll,
  };
  return (
    <GiftContext.Provider value={contextValues}>
      {children}
    </GiftContext.Provider>
  );
}
