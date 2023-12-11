import { createContext, ReactNode, useState } from "react";

export const GiftContext = createContext({} as GiftProviderContextValues);

declare interface GiftProviderContextValues {
  list: Gift[];
  handleAdd: (name: string) => void;
  handleRemove: (id: number) => void;
  handleClear: () => void;
}

export function GiftProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState([] as Gift[]);

  function handleAdd(name: string) {
    let id = list.length > 0 ? list[list.length - 1].id + 1 : 0;
    let newList = [...list];
    newList.push({ name, id });
    setList(newList);
  }

  function handleRemove(id: number) {
    let newList = list.filter((gift) => gift.id != id);
    setList(newList);
  }

  function handleClear() {
    setList([]);
  }

  const contextValues: GiftProviderContextValues = {
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
