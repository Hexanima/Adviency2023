import { useState, useEffect, createContext, ReactNode } from "react";

interface GiftContextValues {
  list: Gift[];
  selected: Gift | null;
  handleAdd: (name: string, quantity: number, image: string) => void;
  handleRemove: (id: number) => void;
  handleClear: () => void;
  handleOpen: (id: number) => void;
  handleClose: () => void;
}

export const GiftContext = createContext({} as GiftContextValues);

export function GiftProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState([] as Gift[]);
  const [selected, setSelected] = useState<Gift | null>(null);
  const listKey = "GiftList";

  useEffect(() => {
    const savedList = localStorage.getItem(listKey);
    const parsedList = savedList ? JSON.parse(savedList) : [];

    if (parsedList.length > 0) {
      setList(parsedList);
    }

    localStorage.setItem(listKey, parsedList);
  }, []);

  useEffect(() => {
    localStorage.setItem(listKey, JSON.stringify(list));
  }, [list]);

  function handleOpen(id: number) {
    const gift = list.find((gift) => gift.id === id) || null;

    setSelected(gift);
  }

  function handleClose() {
    setSelected(null);
  }

  function handleAdd(name: string, quantity: number, image: string) {
    if (name.length > 0 && !list.some((gift) => gift.name == name)) {
      const id = list.length > 0 ? list[list.length - 1].id + 1 : 1;
      const newList = [...list];
      newList.push({ id, name, quantity, image });
      setList(newList);
    }
  }

  function handleRemove(id: number) {
    const newList = list.filter((gift) => gift.id != id);

    if (selected?.id == id) {
      handleClose();
    }

    setList(newList);
  }

  function handleClear() {
    setList([]);
    handleClose();
  }

  const contextValues: GiftContextValues = {
    list,
    selected,
    handleAdd,
    handleRemove,
    handleClear,
    handleOpen,
    handleClose,
  };

  return (
    <GiftContext.Provider value={contextValues}>
      {children}
    </GiftContext.Provider>
  );
}
