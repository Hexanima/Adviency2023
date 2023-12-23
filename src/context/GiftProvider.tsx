import { createContext, useState, useEffect, ReactNode } from "react";
import { ClearGifts, GetGifts, SaveGifts } from "../services/gift.service";

interface GiftContextValues {
  list: Gift[];
  handleAdd: (newGift: Partial<Gift>) => void;
  handleRemove: (id: number) => void;
  handleClear: () => void;
  handleEdit: (editedGift: Gift) => void;
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

  function handleAdd({
    name,
    quantity,
    image = "",
    receptor = "",
    unitPrice = 0,
  }: Partial<Gift>) {
    if (
      name &&
      name.length > 0 &&
      quantity &&
      quantity >= 1 &&
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
        unitPrice,
      });
      setList(newList);
    }
    console.log(list);
  }

  function handleRemove(id: number) {
    const newList = list.filter((gift) => gift.id != id);
    setList(newList);
    if (newList.length == 0) {
      ClearGifts();
    }
  }

  function handleClear() {
    setList([]);
    ClearGifts();
  }

  function handleEdit(editedGift: Gift) {
    const newList = list.map((gift) => {
      if (gift.id == editedGift.id) {
        return editedGift;
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
