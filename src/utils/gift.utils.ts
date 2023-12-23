const giftNames: string[] = [
  "Medias",
  "Pantuflas",
  "Televisor",
  "PlayStation",
  "Peluches",
  "LEGOs",
  "Juegos",
  "Foto enmarcada",
  "Juego de mate Stanley"
];

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function generateName(): string {
  const i = getRandomInt(0, giftNames.length);
  return giftNames[i];
}

export { generateName };
