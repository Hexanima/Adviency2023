import { createContext, useState, useEffect, ReactNode } from "react";

interface GiftContextValues {
  list: Gift[];
  handleAdd: (name: string, quantity: number) => void;
  handleRemove: (id: number) => void;
  handleClear: () => void;
}

export const GiftContext = createContext({} as GiftContextValues);

export function GiftProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState([] as Gift[]);
  const listKey = "GiftList";

  useEffect(() => {
    const savedList = localStorage.getItem(listKey);
    const parsedList = savedList ? JSON.parse(savedList) : [];
    if (parsedList.length != 0) {
      setList(parsedList);
    } else {
      localStorage.setItem(listKey, JSON.stringify(list));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(listKey, JSON.stringify(list));
  }, [list]);

  function handleAdd(name: string, quantity: number) {
    if (name.length > 0 && !list.some((gift) => gift.name == name)) {
      const id = list.length > 0 ? list[list.length - 1].id + 1 : 1;
      const newList = [...list];
      newList.push({ name, id, quantity: quantity > 0 ? quantity : 1 });
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
