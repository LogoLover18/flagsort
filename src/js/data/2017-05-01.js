dataSetVersion = "2023-06-02"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Generation",
    key: "gen",
    tooltip: "Check this to restrict to certain generations.",
    checked: false,
    sub: [
      { name: "Generation I", key: "gen1" },
      { name: "Generation II", key: "gen2" },
      { name: "Generation III", key: "gen3" },
      { name: "Generation IV", key: "gen4" },
      { name: "Generation V", key: "gen5" },
      { name: "Generation VI", key: "gen6" },
      { name: "Generation VII", key: "gen7" },
      { name: "Generation VIII", key: "gen8" },
      { name: "Generation IX", key: "gen9" }
    ]
  },
  {
    name: "Remove Forms",
    key: "form",
    tooltip: "Check this to remove alternate forms of Pokemon."
  },
  {
    name: "Remove Legendaries and Mythicals",
    key: "legend",
    tooltip: "Check this to remove all Legendary and Mythical Pokemon."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Bulbasaur",
    img: "001.png",
    opts: {
      gen: ["gen1"]
    }
  },
  {
    name: "Ivysaur",
    img: "002.png",
    opts: {
      gen: ["gen1"]
    }
  },
  {
    name: "Venusaur",
    img: "003.png",
    opts: {
      gen: ["gen1"] }
  },
  {
    name: "Charmander",
    img: "004.png",
    opts: {
      gen: ["gen1"] }
  },
  {
    name: "Charmeleon",
    img: "005.png",
    opts: {
      gen: ["gen1"] }
  },
  {
    name: "Charizard",
    img: "006.png",
    opts: {
      gen: ["gen1"] }
  },
