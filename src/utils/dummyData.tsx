// const Selected = {
//   Drinks: "Drink2",
//   Chocolates: "Choco1",
//   chips: undefined,
// };
const combos = {
  chips: {
    chips1: {
      Chocolates: ["Choco2"],
      Drinks: ["Drink2", "Drink3"],
      label: "Kurleez",
    },
    chips2: {
      Chocolates: ["Choco1", "Choco3"],
      Drinks: ["Drink1"],
      label: "Lays",
    },
    chips3: {
      Chocolates: ["Choco1"],
      Drinks: ["Drink2"],
      label: "Kurkure",
    },
  },
  Drinks: {
    Drink1: {
      Chocolates: ["Choco3"],
      chips: ["chips2"],
      label: "Apple Sidra",
    },
    Drink2: {
      Chocolates: ["Choco1", "Choco2"],
      chips: ["chips1", "chips3"],
      label: "Pakola",
    },
    Drink3: {
      Chocolates: ["Choco1", "Choco2", "Choco3"],
      chips: ["chips1"],
      label: "Coca Cola",
    },
  },
  Chocolates: {
    Choco1: {
      Drinks: ["Drink2", "Drink3"],
      chips: ["chips2", "chips3"],
      label: "Mars",
    },
    Choco2: {
      Dinks: ["Drink2", "Drink3"],
      chips: ["chips1"],
      label: "Kitkat",
    },
    Choco3: {
      Dinks: ["Drink1", "Drink3"],
      chips: ["chips2"],
      label: "Dairy Milk",
    },
  },
};

export function getCombos() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...combos }), 1000);
  });
}
