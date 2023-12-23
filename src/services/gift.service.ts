const listKey = "GiftList";

async function GetGifts() {
  const savedList = await JSON.parse(localStorage.getItem(listKey) || "[]");
  return savedList;
}

async function SaveGifts(list: Gift[]) {
  await localStorage.setItem(listKey, JSON.stringify(list));
}

async function ClearGifts() {
  await localStorage.setItem(listKey, JSON.stringify([]));
}

export { GetGifts, SaveGifts, ClearGifts };
