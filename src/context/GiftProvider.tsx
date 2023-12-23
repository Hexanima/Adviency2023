import { createContext, useState, useEffect, ReactNode } from "react";
import { GetGifts, SaveGifts } from "../services/gift.service";

interface GiftContextValues {
  list: Gift[];
  handleAdd: (
    name: string,
    quantity: number,
    image: string,
    receptor: string
  ) => void;
  handleRemove: (id: number) => void;
  handleClear: () => void;
  handleEdit: (
    id: number,
    name: string,
    quantity: number,
    image: string,
    receptor: string
  ) => void;
  isLoaded: boolean;
}

export const GiftContext = createContext({} as GiftContextValues);

export function GiftProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState([] as Gift[]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    GetGifts()
      .then((result) => setList(result))
      .catch(() => setList([]))
      .finally(() => setIsLoaded(true));
  }, []);

  useEffect(() => {
    if (list.length > 0) {
      SaveGifts(list);
    }
  }, [list]);

  function handleAdd(
    name: string,
    quantity: number,
    image: string,
    receptor: string
  ) {
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
        receptor,
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

  function handleEdit(
    id: number,
    name: string,
    quantity: number,
    image: string,
    receptor: string
  ) {
    const newList = list.map((gift) => {
      if (gift.id == id) {
        return { id, name, quantity, image, receptor };
      }
      return gift;
    });
    setList(newList);
  }

  const contextValues: GiftContextValues = {
    list,
    handleAdd,
    handleRemove,
    handleClear,
    handleEdit,
    isLoaded,
  };

  return (
    <GiftContext.Provider value={contextValues}>
      {children}
    </GiftContext.Provider>
  );
}
