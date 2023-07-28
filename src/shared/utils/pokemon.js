export const typeNames = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
];

const typeWeakeness = [
  [
    1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
    1.0, 1.0, 1.0,
  ],
  [
    1.0, 1.0, 2.0, 1.0, 1.0, 0.5, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 1.0,
    1.0, 0.5, 2.0,
  ],
  [
    1.0, 0.5, 1.0, 1.0, 0.0, 2.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 2.0, 1.0, 2.0,
    1.0, 1.0, 1.0,
  ],
  [
    1.0, 0.5, 1.0, 0.5, 2.0, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0, 2.0, 1.0,
    1.0, 1.0, 0.5,
  ],
  [
    1.0, 1.0, 1.0, 0.5, 1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 0.0, 1.0, 2.0,
    1.0, 1.0, 1.0,
  ],
  [
    0.5, 2.0, 0.5, 0.5, 2.0, 1.0, 1.0, 1.0, 2.0, 0.5, 2.0, 2.0, 1.0, 1.0, 1.0,
    1.0, 1.0, 1.0,
  ],
  [
    1.0, 0.5, 2.0, 1.0, 0.5, 2.0, 1.0, 1.0, 1.0, 2.0, 1.0, 0.5, 1.0, 1.0, 1.0,
    1.0, 1.0, 1.0,
  ],
  [
    0.0, 0.0, 1.0, 0.5, 1.0, 1.0, 0.5, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
    1.0, 2.0, 1.0,
  ],
  [
    0.5, 2.0, 0.5, 0.0, 2.0, 0.5, 0.5, 1.0, 0.5, 2.0, 1.0, 0.5, 1.0, 0.5, 0.5,
    0.5, 1.0, 0.5,
  ],
  [
    1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 0.5, 1.0, 0.5, 0.5, 2.0, 0.5, 1.0, 1.0, 0.5,
    1.0, 1.0, 0.5,
  ],
  [
    1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 2.0, 2.0, 1.0, 0.5,
    1.0, 1.0, 1.0,
  ],
  [
    1.0, 1.0, 2.0, 2.0, 0.5, 1.0, 2.0, 1.0, 1.0, 2.0, 0.5, 0.5, 0.5, 1.0, 2.0,
    1.0, 1.0, 1.0,
  ],
  [
    1.0, 1.0, 0.5, 1.0, 2.0, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0, 1.0, 0.5, 1.0, 1.0,
    1.0, 1.0, 1.0,
  ],
  [
    1.0, 0.5, 1.0, 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 1.0,
    1.0, 2.0, 1.0,
  ],
  [
    1.0, 2.0, 1.0, 1.0, 1.0, 2.0, 1.0, 1.0, 2.0, 2.0, 1.0, 1.0, 1.0, 1.0, 0.5,
    1.0, 1.0, 1.0,
  ],
  [
    1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 0.5, 1.0, 2.0,
    2.0, 1.0, 2.0,
  ],
  [
    1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 2.0, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0,
    1.0, 0.5, 2.0,
  ],
  [
    1.0, 0.5, 1.0, 2.0, 1.0, 1.0, 0.5, 1.0, 2.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
    0.0, 0.5, 1.0,
  ],
];

const typeColors = [
  "#A8A878",
  "#C03028",
  "#A890F0",
  "#A040A0",
  "#E0C068",
  "#B8A038",
  "#A8B820",
  "#705898",
  "#B8B8D0",
  "#F08030",
  "#6890F0",
  "#A1C9A8",
  "#FAE078",
  "#F85888",
  "#98D8D8",
  "#7038F8",
  "#705848",
  "#EE99AC",
];

// ===========================================================

export const typeColor = (tipo) => {
  const indice = typeNames.indexOf(tipo, 0);

  return tipo ? typeColors[indice] : "transparent";
};

export const typeName = (tipo) => {
  return tipo ? tipo.toUpperCase() : undefined;
};

export const typeSymbol = (tipo) => {
  return tipo.map((tipagem) =>
    tipagem ? `../../../pictures/typeSymbols/${tipagem}.png` : undefined
  );
};

export const typesWeakeness = (tipo) => {
  const typeIndex = tipo.map((type) => {
    return typeNames.findIndex((element) => element === type);
  });

  return typeIndex.length === 1
    ? typeWeakeness[typeIndex[0]]
    : typeWeakeness[typeIndex[0]].map(
        (weakness, index) => weakness * typeWeakeness[typeIndex[1]][index]
      );
};
