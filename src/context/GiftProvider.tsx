import { createContext, useState, useEffect, ReactNode } from "react";

interface GiftContextValues {
  list: Gift[];
  handleAdd: (name: string, quantity: number, image: string) => void;
  handleRemove: (id: number) => void;
  handleClear: () => void;
}

export const GiftContext = createContext({} as GiftContextValues);

export function GiftProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState([] as Gift[]);
  const listKey = "GiftList";

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem(listKey) || "[]");

    console.log(savedList);

    setList(savedList);
  }, []);

  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem(listKey, JSON.stringify(list));
    }
  }, [list]);

  function handleAdd(name: string, quantity: number, image: string) {
    if (
      name.length > 0 &&
      quantity > 1 &&
      !list.some((gift) => gift.name == name)
    ) {
      const newList = [...list];
      const id = list.length > 0 ? list[list.length - 1].id + 1 : 1;
      newList.push({
        id,
        name,
        quantity,
        image,
      });
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
