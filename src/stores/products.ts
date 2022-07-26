import { defineStore } from "pinia";

export const productStore = defineStore({
  id: "product",
  state: () => ({
    oils: [
      {
        id: 1,
        product_name: "Argan Oil",
      },
      {
        id: 2,
        product_name: "BeezWax Oil",
      },
      {
        id: 2,
        product_name: "Coconut Oil",
      },
      {
        id: 2,
        product_name: "Demr Oil",
      },
      {
        id: 2,
        product_name: "Earnut Oil",
      },
      {
        id: 2,
        product_name: "Fennel Oil",
      },
      {
        id: 2,
        product_name: "Ginger Oil",
      },
      {
        id: 2,
        product_name: "Shea Oil",
      },
    ],
    butters: [
      {
        id: 1,
        product_name: "Coco Butter",
      },
      {
        id: 2,
        product_name: "Avocado Butter",
      },
      {
        id: 3,
        product_name: "Mango Butter",
      },
    ],
    emulsifier: [
      {
        id: 1,
        product_name: "Bees Wax",
      },
      {
        id: 2,
        product_name: "E wax",
      },
      {
        id: 3,
        product_name: "Simy Wax",
      },
    ],
    thickner: [
      {
        id: 1,
        product_name: "Gema All Plus",
      },
      {
        id: 2,
        product_name: "German Hydrosol",
      },
      {
        id: 3,
        product_name: "Hydrolized Wheat Protein",
      },
    ],
    preservatives: [
      {
        id: 1,
        product_name: "Artigen",
      },
      {
        id: 2,
        product_name: "Collagen Peptide",
      },
    ],
    essential_oil: [
      {
        id: 1,
        product_name: "Lavendar Essential Oil",
      },
      {
        id: 2,
        product_name: "Carrot Essential Oil",
      },
      {
        id: 3,
        product_name: "LemonGrass Essential Oil",
      },
    ],
    fragrance_oil: [
      {
        id: 1,
        product_name: "Lavendar Fragrance Oil",
      },
      {
        id: 2,
        product_name: "BeetRoot Fragrance Oil",
      },
    ],
    actives: [
      {
        id: 1,
        product_name: "ACTIVE 1",
      },
      {
        id: 2,
        product_name: "active 2",
      },
      {
        id: 3,
        product_name: "active 3",
      },
    ],
  }),
  getters: {},
  actions: {},
});
