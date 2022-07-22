<script setup lang="ts">
/*
Imports
*/
// import Vue from "vue";
import {
  ref,
  reactive,
  watch,
  computed,
  watchEffect,
  onMounted,
  onUnmounted,
} from "vue";
import { useClickOutside } from "@/composables/useClickOutside";
import { lotionStore } from "@/stores/lotion";
import { v4 as uuid } from "uuid";

/*
Use Lotion Store 
*/
const lotionstore = lotionStore();

/*
Step 4 data
*/
type Stepdata = {
  oils: any[];
  butters: any[];
  emulsifier: any[];
  thickner: any[];
};

const step4_data: Stepdata = reactive({
  oils: [],
  butters: [],
  emulsifier: [],
  thickner: [],
});

const dropdown_data = reactive({
  oils: {
    searchQuery: "",
    selectedItem: null,
    current_dropdown: null,
  },
  butters: {
    searchQuery: "",
    selectedItem: null,
    current_dropdown: null,
  },
  emulsifier: {
    searchQuery: "",
    selectedItem: null,
    current_dropdown: null,
  },
  thickner: {
    searchQuery: "",
    selectedItem: null,
    current_dropdown: null,
  },
});
/*
OPEN DROPDOWN FUNCTION
*/
//Oils
const toggle_oil_dropdown = (id: any) => {
  if (dropdown_data.oils.current_dropdown != id) {
    dropdown_data.oils.current_dropdown = id;
  } else {
    dropdown_data.oils.current_dropdown = null;
  }
};
//BUTTERS
const toggle_butter_dropdown = (id: any) => {
  if (dropdown_data.butters.current_dropdown != id) {
    dropdown_data.butters.current_dropdown = id;
  } else {
    dropdown_data.butters.current_dropdown = null;
  }
};
//EMULSIFIER
const toggle_emulsifier_dropdown = (id: any) => {
  if (dropdown_data.emulsifier.current_dropdown != id) {
    dropdown_data.emulsifier.current_dropdown = id;
  } else {
    dropdown_data.emulsifier.current_dropdown = null;
  }
};
//thickner
const toggle_thickner_dropdown = (id: any) => {
  if (dropdown_data.thickner.current_dropdown != id) {
    dropdown_data.thickner.current_dropdown = id;
  } else {
    dropdown_data.thickner.current_dropdown = null;
  }
};

/*
FILTERED DATA FOR DROPDOWN
*/
//OILS
const filtered_oils = computed(() => {
  const query = ref(dropdown_data.oils.searchQuery.toLowerCase());
  if (dropdown_data.oils.searchQuery === "") {
    return products_data.oils;
  }
  return products_data.oils.filter((item) => {
    return Object.values(item).some((word: any) =>
      String(word).toLowerCase().includes(query.value)
    );
  });
});
// BUTTERS
const filtered_butters = computed(() => {
  const query = ref(dropdown_data.butters.searchQuery.toLowerCase());
  if (dropdown_data.butters.searchQuery === "") {
    return products_data.butters;
  }
  return products_data.butters.filter((item) => {
    return Object.values(item).some((word: any) =>
      String(word).toLowerCase().includes(query.value)
    );
  });
});
//EMULSIFIER
const filtered_emulsifier = computed(() => {
  const query = ref(dropdown_data.emulsifier.searchQuery.toLowerCase());
  if (dropdown_data.emulsifier.searchQuery === "") {
    return products_data.emulsifier;
  }
  return products_data.emulsifier.filter((item) => {
    return Object.values(item).some((word: any) =>
      String(word).toLowerCase().includes(query.value)
    );
  });
});
//thickner
const filtered_thickner = computed(() => {
  const query = ref(dropdown_data.thickner.searchQuery.toLowerCase());
  if (dropdown_data.thickner.searchQuery === "") {
    return products_data.thickner;
  }
  return products_data.thickner.filter((item) => {
    return Object.values(item).some((word: any) =>
      String(word).toLowerCase().includes(query.value)
    );
  });
});

/*
SELECT DATA FOR DROPDOWN
*/
const select_oil_option = (id: any, name: any) => {
  step4_data.oils.forEach((element, index) => {
    if (element.id === id) {
      element.product_Name = name;
    }
  });
  dropdown_data.oils.current_dropdown = null;
  dropdown_data.oils.searchQuery = "";
};

//BUTTERS
const select_butter_option = (id: any, name: any) => {
  step4_data.butters.forEach((element, index) => {
    if (element.id === id) {
      element.product_Name = name;
    }
  });
  dropdown_data.butters.current_dropdown = null;
  dropdown_data.butters.searchQuery = "";
};

// EMULSIFIER
const select_emulsifier_option = (id: any, name: any) => {
  step4_data.emulsifier.forEach((element, index) => {
    if (element.id === id) {
      element.product_Name = name;
    }
  });
  dropdown_data.emulsifier.current_dropdown = null;
  dropdown_data.emulsifier.searchQuery = "";
};

//THICKNER
const select_thickner_option = (id: any, name: any) => {
  step4_data.thickner.forEach((element, index) => {
    if (element.id === id) {
      element.product_Name = name;
    }
  });
  dropdown_data.thickner.current_dropdown = null;
  dropdown_data.thickner.searchQuery = "";
};

const products_data = reactive({
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
      product_name: "thickner 1",
    },
    {
      id: 2,
      product_name: "thickner 2",
    },
    {
      id: 3,
      product_name: "thickner 3",
    },
  ],
});
const add_oil_product = () => {
  step4_data.oils.push({
    id: uuid(),
    product_Name: "",
    amount: 0,
  });
};
const add_butter_product = () => {
  step4_data.butters.push({
    id: uuid(),
    product_Name: "",
    amount: 0,
  });
};
const add_emulsifier_product = () => {
  step4_data.emulsifier.push({
    id: uuid(),
    product_Name: "",
    amount: 0,
  });
};
const add_thickner_product = () => {
  step4_data.thickner.push({
    id: uuid(),
    product_Name: "",
    amount: 0,
  });
};

/*
DELETE PRODUCT
*/

//OILS
const delete_oil_product = (id: any) => {
  step4_data.oils = step4_data.oils.filter((item) => item.id !== id);
};
//BUTTER
const delete_butter_product = (id: any) => {
  step4_data.butters = step4_data.butters.filter((item) => item.id !== id);
};
//EMULSIFIER
const delete_emulsifier_product = (id: any) => {
  step4_data.emulsifier = step4_data.emulsifier.filter(
    (item) => item.id !== id
  );
};
//THICKNER
const delete_thickner_product = (id: any) => {
  step4_data.thickner = step4_data.thickner.filter((item) => item.id !== id);
};

//Watch
const total_data = reactive({
  oils: 0,
  butters: 0,
  emulsifier: 0,
  thickner: 0,
});

const total_left_data = reactive({
  oils: 25,
  butters: 30,
  emulsifier: 40,
  thickner: 50,
});

watch(step4_data, () => {
  //OILS
  total_data.oils = step4_data.oils.reduce(function (acc, cur) {
    return acc + cur.amount;
  }, 0);
  total_left_data.oils = 25 - total_data.oils;

  console.log("TOTAL:", total_data.oils);
  console.log("TOTAL LEFT:", total_left_data.oils);
});

//RESET THE AMOUNT LEFT TO 0 IF LESS THAN 0 (TO AVOID NEGATIVE NUMBERS)
watch(total_left_data, () => {
  if (total_left_data.oils < 0) {
    total_left_data.oils = 0;
  } else if (total_left_data.butters < 0) {
    total_left_data.butters = 0;
  } else if (total_left_data.emulsifier < 0) {
    total_left_data.emulsifier = 0;
  } else if (total_left_data.thickner < 0) {
    total_left_data.thickner = 0;
  }
});

/*
CLOSE DROPDOWN ON CLICK OUTSIDE
*/
const dropdown_oil = ref(null);
const dropdown_butter = ref(null);
const dropdown_emulsifier = ref(null);
const dropdown_thickner = ref(null);

//OIL
useClickOutside(dropdown_oil, () => {
  toggle_oil_dropdown(null);
});

//BUTTER
useClickOutside(dropdown_butter, () => {
  toggle_butter_dropdown(null);
});

//EMULSIFIER
useClickOutside(dropdown_emulsifier, () => {
  toggle_emulsifier_dropdown(null);
});

//THICKNER
useClickOutside(dropdown_thickner, () => {
  toggle_thickner_dropdown(null);
});
</script>

<template>
  <section class="step-4 steps">
    <header>
      <h1>STEP 4</h1>
      <div class="sub-heading">
        <p>Select Your Prefered Ingredients</p>
      </div>
    </header>
    <main>
      <div class="phase">
        <div class="phase-header">
          <div class="phases">
            <h1>Water Phase</h1>
          </div>
        </div>
        <div class="phase-sub">
          <div class="sub-item">
            <div class="item-content">
              <h1>Distilled Water</h1>
              <input
                type="number"
                id="quantity"
                min="0"
                readonly
                v-model="lotionstore.step3_data.oils.amount"
              />
            </div>
          </div>
          <div class="sub-item">
            <div class="item-content">
              <h1>Hydrosols</h1>
              <input
                type="number"
                id="quantity"
                min="0"
                readonly
                v-model="lotionstore.step3_data.oils.amount"
              />
            </div>
          </div>
          <div class="sub-item">
            <div class="item-content">
              <h1>Aloe Juice</h1>
              <input
                type="number"
                id="quantity"
                min="0"
                readonly
                v-model="lotionstore.step3_data.oils.amount"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="phase">
        <div class="phase-header">
          <div class="phases">
            <h1>Oil Phase</h1>
          </div>
        </div>
        <div class="phase-sub">
          <!-- SUB ITEM -->
          <div class="sub-item">
            <div class="item-content">
              <h1>Oils</h1>
              <input
                type="number"
                id="quantity"
                min="0"
                readonly
                v-model="lotionstore.step3_data.oils.amount"
              />
            </div>
            <div
              class="percent-left-container"
              v-if="step4_data.oils.length != 0"
            >
              <p>You Have {{ total_left_data.oils }}% Left</p>
            </div>
            <div class="products-content" ref="dropdown_oil">
              <div
                class="product-item"
                v-for="product in step4_data.oils"
                :key="product.id"
              >
                <div class="delete-btn-container">
                  <div
                    class="delete-btn"
                    @click="delete_oil_product(product.id)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="14"
                      height="14"
                      fill="currentColor"
                      stroke="currentColor"
                    >
                      <path
                        d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"
                      />
                    </svg>
                    <!-- <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="16"
                    height="16"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <path
                      d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"
                    />
                  </svg> -->
                  </div>
                </div>
                <div class="dropdown-input">
                  <div
                    class="selected-item"
                    @click="toggle_oil_dropdown(product.id)"
                  >
                    <span v-if="product.product_Name">{{
                      product.product_Name
                    }}</span>
                    <span v-else>Selected Products</span>
                    <div
                      class="arrow"
                      :class="
                        product.id == dropdown_data.oils.current_dropdown
                          ? 'active'
                          : ''
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        width="16"
                        height="16"
                        stroke="currentColor"
                      >
                        <path
                          d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    class="dropdown-popup"
                    v-if="product.id == dropdown_data.oils.current_dropdown"
                  >
                    <div class="dropdown-content">
                      <input
                        type="text"
                        v-model="dropdown_data.oils.searchQuery"
                        placeholder="Search For Oils"
                      />
                      <div
                        class="options"
                        v-for="(item, index) in filtered_oils"
                        :key="index"
                        @click="
                          select_oil_option(product.id, item.product_name)
                        "
                      >
                        <ul>
                          <li class="option">{{ item.product_name }}</li>
                        </ul>
                      </div>
                      <div class="default" v-if="filtered_oils.length === 0">
                        <span>Oil Can't Be Found</span>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  v-model="product.amount"
                />
              </div>
              <div class="total-container" v-if="step4_data.oils.length != 0">
                <p>Total: {{ total_data.oils }}%</p>
              </div>

              <div class="add-btn-container">
                <button class="add-btn" @click="add_oil_product">Add +</button>
              </div>
            </div>
          </div>
          <!-- SUB ITEM -->
          <div class="sub-item">
            <div class="item-content">
              <h1>Butters</h1>
              <input
                type="number"
                id="quantity"
                min="0"
                readonly
                v-model="lotionstore.step3_data.oils.amount"
              />
            </div>
            <div class="products-content" ref="dropdown_butter">
              <div
                class="product-item"
                v-for="product in step4_data.butters"
                :key="product.id"
              >
                <div class="dropdown-input">
                  <div
                    class="selected-item"
                    @click="toggle_butter_dropdown(product.id)"
                  >
                    <span v-if="product.product_Name">{{
                      product.product_Name
                    }}</span>
                    <span v-else>Selected Products</span>
                    <div
                      class="arrow"
                      :class="
                        product.id == dropdown_data.butters.current_dropdown
                          ? 'active'
                          : ''
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        width="16"
                        height="16"
                        stroke="currentColor"
                      >
                        <path
                          d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    class="dropdown-popup"
                    v-if="product.id == dropdown_data.butters.current_dropdown"
                  >
                    <div class="dropdown-content">
                      <input
                        type="text"
                        v-model="dropdown_data.butters.searchQuery"
                        placeholder="Search For Oils"
                      />
                      <div
                        class="options"
                        v-for="(item, index) in filtered_butters"
                        :key="index"
                        @click="
                          select_butter_option(product.id, item.product_name)
                        "
                      >
                        <ul>
                          <li class="option">{{ item.product_name }}</li>
                        </ul>
                      </div>
                      <div class="default" v-if="filtered_butters.length === 0">
                        <span>Butter Can't Be Found</span>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  v-model="product.amount"
                />
                <div
                  class="delete-btn"
                  @click="delete_butter_product(product.id)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="16"
                    height="16"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <path
                      d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"
                    />
                  </svg>
                </div>
              </div>

              <div class="add-btn-container">
                <button class="add-btn" @click="add_butter_product">
                  Add +
                </button>
              </div>
            </div>
          </div>
          <!-- SUB ITEM -->
          <div class="sub-item">
            <div class="item-content">
              <h1>Emulsifier</h1>
              <input
                type="number"
                id="quantity"
                min="0"
                readonly
                v-model="lotionstore.step3_data.oils.amount"
              />
            </div>
            <div class="products-content" ref="dropdown_emulsifier">
              <div
                class="product-item"
                v-for="product in step4_data.emulsifier"
                :key="product.id"
              >
                <div class="dropdown-input">
                  <div
                    class="selected-item"
                    @click="toggle_emulsifier_dropdown(product.id)"
                  >
                    <span v-if="product.product_Name">{{
                      product.product_Name
                    }}</span>
                    <span v-else>Selected Products</span>
                    <div
                      class="arrow"
                      :class="
                        product.id == dropdown_data.emulsifier.current_dropdown
                          ? 'active'
                          : ''
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        width="16"
                        height="16"
                        stroke="currentColor"
                      >
                        <path
                          d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    class="dropdown-popup"
                    v-if="
                      product.id == dropdown_data.emulsifier.current_dropdown
                    "
                  >
                    <div class="dropdown-content">
                      <input
                        type="text"
                        v-model="dropdown_data.emulsifier.searchQuery"
                        placeholder="Search For Oils"
                      />
                      <div
                        class="options"
                        v-for="(item, index) in filtered_emulsifier"
                        :key="index"
                        @click="
                          select_emulsifier_option(
                            product.id,
                            item.product_name
                          )
                        "
                      >
                        <ul>
                          <li class="option">{{ item.product_name }}</li>
                        </ul>
                      </div>
                      <div
                        class="default"
                        v-if="filtered_emulsifier.length === 0"
                      >
                        <span>Emulsifier Can't Be Found</span>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  v-model="product.amount"
                />
                <div
                  class="delete-btn"
                  @click="delete_emulsifier_product(product.id)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="16"
                    height="16"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <path
                      d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"
                    />
                  </svg>
                </div>
              </div>

              <div class="add-btn-container">
                <button class="add-btn" @click="add_emulsifier_product">
                  Add +
                </button>
              </div>
            </div>
          </div>
          <div class="sub-item">
            <div class="item-content">
              <h1>Thickner</h1>
              <input
                type="number"
                id="quantity"
                min="0"
                readonly
                v-model="lotionstore.step3_data.oils.amount"
              />
            </div>
            <div class="products-content" ref="dropdown_thickner">
              <div
                class="product-item"
                v-for="product in step4_data.thickner"
                :key="product.id"
              >
                <div class="dropdown-input">
                  <div
                    class="selected-item"
                    @click="toggle_thickner_dropdown(product.id)"
                  >
                    <span v-if="product.product_Name">{{
                      product.product_Name
                    }}</span>
                    <span v-else>Selected Products</span>
                    <div
                      class="arrow"
                      :class="
                        product.id == dropdown_data.thickner.current_dropdown
                          ? 'active'
                          : ''
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        width="16"
                        height="16"
                        stroke="currentColor"
                      >
                        <path
                          d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    class="dropdown-popup"
                    v-if="product.id == dropdown_data.thickner.current_dropdown"
                  >
                    <div class="dropdown-content">
                      <input
                        type="text"
                        v-model="dropdown_data.thickner.searchQuery"
                        placeholder="Search For Oils"
                      />
                      <div
                        class="options"
                        v-for="(item, index) in filtered_thickner"
                        :key="index"
                        @click="
                          select_thickner_option(product.id, item.product_name)
                        "
                      >
                        <ul>
                          <li class="option">{{ item.product_name }}</li>
                        </ul>
                      </div>
                      <div
                        class="default"
                        v-if="filtered_thickner.length === 0"
                      >
                        <span>Thickner Can't Be Found</span>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  v-model="product.amount"
                />
                <div
                  class="delete-btn"
                  @click="delete_thickner_product(product.id)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="16"
                    height="16"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <path
                      d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"
                    />
                  </svg>
                </div>
              </div>

              <div class="add-btn-container">
                <button class="add-btn" @click="add_thickner_product">
                  Add +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>
<style scoped>
.phase-header .phases {
  padding: 10px 20px;
}
.phase-sub {
  /* border: 1px solid var(--color-primary); */
  margin: 0 20px;
  margin-top: 10px;
}
.sub-item {
  width: 100%;
}
.sub-item .item-content {
  padding: 10px 15px;
  background: #fefffc;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.sub-item .item-content input {
  margin-left: auto;
}
.sub-item .percent-left-container {
  margin-top: 0;
  margin-left: 20px;
}
.sub-item .percent-left-container p {
  font-size: 15px;
}
.sub-item .products-content {
  margin: 10px 15px;
}
.sub-item .products-content .total-container {
  margin-top: -10px;
  margin-left: 20px;
}
.sub-item .total-container p {
  font-size: 15px;
}
.sub-item .products-content .add-btn-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.sub-item .products-content .add-btn-container button {
  background: none;
  border: none;
  font-size: 17px;
  cursor: pointer;
}
.sub-item .products-content .product-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  position: relative;
}
.sub-item .product-item .delete-btn-container {
  margin-right: 10px;
  margin-top: -10px;
}
.sub-item .product-item .delete-btn-container .delete-btn {
  width: 24px;
  height: 24px;
  background: var(--color-primary);
  color: var(--color-red);
  box-shadow: 0 0 15px rgb(0 0 0 / 15%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.sub-item .product-item .delete-btn-container .delete-btn:hover {
  transform: scale(1.06);
}
.sub-item .product-item .dropdown-input {
  width: 100%;
  margin-right: 6px;
  position: relative;
}
.sub-item .product-item .dropdown-input .selected-item {
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-primary);
  /* box-shadow: 0 0 15px rgb(0 0 0 / 15%); */
  border-radius: 10px;
  border: 1px solid transparent;
  font-size: 17px;
  cursor: pointer;
  transition: all 0.3s ease-in;
}
.sub-item .product-item .dropdown-input .selected-item {
  color: var(--color-text);
}
.sub-item .product-item .selected-item .arrow {
  transform: rotate(0deg);
  transition: all 0.5s ease;
}
.sub-item .product-item .selected-item .arrow.active {
  transform: rotate(180deg);
}
.sub-item .dropdown-popup {
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  z-index: 5;
  background: var(--color-primary);
  box-shadow: 0 0 15px rgb(0 0 0 / 15%);
  border-radius: 10px;
  max-height: 240px;
  overflow-y: auto;
}
.sub-item .dropdown-popup::-webkit-scrollbar {
  width: 6px;
  border-radius: 0 10px 10px 0;
}
/* Handle */
.sub-item .dropdown-popup::-webkit-scrollbar-thumb {
  border-radius: 0 10px 10px 0;
  background: #888;
}

.sub-item .dropdown-popup input {
  position: sticky;
  top: 0;
  right: 0;
  z-index: 6;
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 10px 10px 0 0;
  border: 5px solid var(--color-background-soft);
}
.sub-item .dropdown-popup input:focus {
  outline: none;
}
.sub-item .dropdown-popup ul {
  margin-top: 5px;
  list-style: none;
  font-size: 17px;
  padding-left: 0;
}
.sub-item .dropdown-popup .option {
  padding: 12px 24px;
  cursor: pointer;
}
.sub-item .dropdown-popup .option:hover {
  background: var(--color-background-soft);
}
.sub-item .dropdown-popup .default {
  text-align: center;
  padding: 12px 16px;
  font-size: 16px;
}
</style>
