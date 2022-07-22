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
  preservatives: any[];
  essential_oil: any[];
  fragrance_oil: any[];
  actives: any[];
};

const step4_data: Stepdata = reactive({
  oils: [],
  butters: [],
  emulsifier: [],
  thickner: [],
  preservatives: [],
  essential_oil: [],
  fragrance_oil: [],
  actives: [],
});

/*
DATA FOR DROPDOWN FUNCTIONALITY
*/
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
  preservatives: {
    searchQuery: "",
    selectedItem: null,
    current_dropdown: null,
  },
  essential_oil: {
    searchQuery: "",
    selectedItem: null,
    current_dropdown: null,
  },
  fragrance_oil: {
    searchQuery: "",
    selectedItem: null,
    current_dropdown: null,
  },
  actives: {
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
//THICKNER
const toggle_thickner_dropdown = (id: any) => {
  if (dropdown_data.thickner.current_dropdown != id) {
    dropdown_data.thickner.current_dropdown = id;
  } else {
    dropdown_data.thickner.current_dropdown = null;
  }
};
//PRESERVATIVES
const toggle_preservatives_dropdown = (id: any) => {
  if (dropdown_data.preservatives.current_dropdown != id) {
    dropdown_data.preservatives.current_dropdown = id;
  } else {
    dropdown_data.preservatives.current_dropdown = null;
  }
};
//ESSENTIAL OIL
const toggle_essential_oil_dropdown = (id: any) => {
  if (dropdown_data.essential_oil.current_dropdown != id) {
    dropdown_data.essential_oil.current_dropdown = id;
  } else {
    dropdown_data.essential_oil.current_dropdown = null;
  }
};
//FRAGRANCE OIL
const toggle_fragrance_oil_dropdown = (id: any) => {
  if (dropdown_data.fragrance_oil.current_dropdown != id) {
    dropdown_data.fragrance_oil.current_dropdown = id;
  } else {
    dropdown_data.fragrance_oil.current_dropdown = null;
  }
};
//ACTIVES
const toggle_actives_dropdown = (id: any) => {
  if (dropdown_data.actives.current_dropdown != id) {
    dropdown_data.actives.current_dropdown = id;
  } else {
    dropdown_data.actives.current_dropdown = null;
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
//PRESERVATIVES
const filtered_preservatives = computed(() => {
  const query = ref(dropdown_data.preservatives.searchQuery.toLowerCase());
  if (dropdown_data.preservatives.searchQuery === "") {
    return products_data.preservatives;
  }
  return products_data.preservatives.filter((item) => {
    return Object.values(item).some((word: any) =>
      String(word).toLowerCase().includes(query.value)
    );
  });
});
//ESSENTIAL OIL
const filtered_essential_oil = computed(() => {
  const query = ref(dropdown_data.essential_oil.searchQuery.toLowerCase());
  if (dropdown_data.essential_oil.searchQuery === "") {
    return products_data.essential_oil;
  }
  return products_data.essential_oil.filter((item) => {
    return Object.values(item).some((word: any) =>
      String(word).toLowerCase().includes(query.value)
    );
  });
});
// FRAGRANCE OIL
const filtered_fragrance_oil = computed(() => {
  const query = ref(dropdown_data.fragrance_oil.searchQuery.toLowerCase());
  if (dropdown_data.fragrance_oil.searchQuery === "") {
    return products_data.fragrance_oil;
  }
  return products_data.fragrance_oil.filter((item) => {
    return Object.values(item).some((word: any) =>
      String(word).toLowerCase().includes(query.value)
    );
  });
});
//ACTIVES
const filtered_actives = computed(() => {
  const query = ref(dropdown_data.actives.searchQuery.toLowerCase());
  if (dropdown_data.actives.searchQuery === "") {
    return products_data.actives;
  }
  return products_data.actives.filter((item) => {
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

//PRESERVATIVES
const select_preservatives_option = (id: any, name: any) => {
  step4_data.preservatives.forEach((element, index) => {
    if (element.id === id) {
      element.product_Name = name;
    }
  });
  dropdown_data.preservatives.current_dropdown = null;
  dropdown_data.preservatives.searchQuery = "";
};

//ESSENTIAL OIL
const select_essential_oil_option = (id: any, name: any) => {
  step4_data.essential_oil.forEach((element, index) => {
    if (element.id === id) {
      element.product_Name = name;
    }
  });
  dropdown_data.essential_oil.current_dropdown = null;
  dropdown_data.essential_oil.searchQuery = "";
};

//FRAGRANCE OIL
const select_fragrance_oil_option = (id: any, name: any) => {
  step4_data.fragrance_oil.forEach((element, index) => {
    if (element.id === id) {
      element.product_Name = name;
    }
  });
  dropdown_data.fragrance_oil.current_dropdown = null;
  dropdown_data.fragrance_oil.searchQuery = "";
};

//ACTIVES
const select_actives_option = (id: any, name: any) => {
  step4_data.actives.forEach((element, index) => {
    if (element.id === id) {
      element.product_Name = name;
    }
  });
  dropdown_data.actives.current_dropdown = null;
  dropdown_data.actives.searchQuery = "";
};

/*
PRODUCT DATA
*/
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
  preservatives: [
    {
      id: 1,
      product_name: "pres 1",
    },
    {
      id: 2,
      product_name: "thickpresner 2",
    },
  ],
  essential_oil: [
    {
      id: 1,
      product_name: "ess 1",
    },
    {
      id: 2,
      product_name: "ess 2",
    },
    {
      id: 3,
      product_name: "ess 3",
    },
  ],
  fragrance_oil: [
    {
      id: 1,
      product_name: "frag 1",
    },
    {
      id: 2,
      product_name: "frag 2",
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
});

/*
ADD PRODUCT
*/
//OILS
const add_oil_product = () => {
  step4_data.oils.push({
    id: uuid(),
    product_Name: "",
    amount: 0,
  });
};

//BUTTERS
const add_butter_product = () => {
  step4_data.butters.push({
    id: uuid(),
    product_Name: "",
    amount: 0,
  });
};

//EMULSIFIER
const add_emulsifier_product = () => {
   if (step4_data.emulsifier.length != 1) {
  step4_data.emulsifier.push({
    id: uuid(),
    product_Name: "",
    amount: 0,
  });
   }
};

//THICKNER
const add_thickner_product = () => {
  if (step4_data.thickner.length != 1) {
    step4_data.thickner.push({
      id: uuid(),
      product_Name: "",
      amount: 0,
    });
  }
};

//PRESERVATIVES
const add_preservatives_product = () => {
  step4_data.preservatives.push({
    id: uuid(),
    product_Name: "",
    amount: 0,
  });
};

//ESSENTIAL OIL
const add_essential_oil_product = () => {
  step4_data.essential_oil.push({
    id: uuid(),
    product_Name: "",
    amount: 0,
  });
};

//FRAGRANCE OIL
const add_fragrance_oil_product = () => {
  step4_data.fragrance_oil.push({
    id: uuid(),
    product_Name: "",
    amount: 0,
  });
};

//ACTIVES
const add_actives_product = () => {
  step4_data.actives.push({
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

//PRESERVATIVES
const delete_preservatives_product = (id: any) => {
  step4_data.preservatives = step4_data.preservatives.filter(
    (item) => item.id !== id
  );
};

//ESSENTIAL OIL
const delete_essential_oil_product = (id: any) => {
  step4_data.essential_oil = step4_data.essential_oil.filter(
    (item) => item.id !== id
  );
};

//FRAGRANCE OIL
const delete_fragrance_oil_product = (id: any) => {
  step4_data.fragrance_oil = step4_data.fragrance_oil.filter(
    (item) => item.id !== id
  );
};

//ACTIVES
const delete_actives_product = (id: any) => {
  step4_data.actives = step4_data.actives.filter((item) => item.id !== id);
};

//Watch
const total_data = reactive({
  oils: 0,
  butters: 0,
  emulsifier: 0,
  thickner: 0,
  preservatives: 0,
  essential_oil: 0,
  fragrance_oil: 0,
  actives: 0,
});

const total_left_data = reactive({
  oils: lotionstore.step3_data.oils.amount,
  butters: lotionstore.step3_data.butters.amount,
  emulsifier: lotionstore.step3_data.emulsifier.amount,
  thickner: lotionstore.step3_data.thickner.amount,
  preservatives: lotionstore.step3_data.preservatives.amount,
  essential_oil: lotionstore.step3_data.essential_oil.amount,
  fragrance_oil: lotionstore.step3_data.fragrance_oil.amount,
  actives: lotionstore.step3_data.actives.amount,
});

watch(step4_data, () => {
  //OILS
  total_data.oils = step4_data.oils.reduce(function (acc, cur) {
    return acc + cur.amount;
  }, 0);
  total_left_data.oils = lotionstore.step3_data.oils.amount - total_data.oils;

  //BUTTERS
  total_data.butters = step4_data.butters.reduce(function (acc, cur) {
    return acc + cur.amount;
  }, 0);
  total_left_data.butters =
    lotionstore.step3_data.butters.amount - total_data.butters;

  //EMULSIFIER
  total_data.emulsifier = step4_data.emulsifier.reduce(function (acc, cur) {
    return acc + cur.amount;
  }, 0);
  total_left_data.emulsifier =
    lotionstore.step3_data.emulsifier.amount - total_data.emulsifier;

  //THICKNER
  total_data.thickner = step4_data.thickner.reduce(function (acc, cur) {
    return acc + cur.amount;
  }, 0);
  total_left_data.thickner =
    lotionstore.step3_data.thickner.amount - total_data.thickner;

  //PRESERVATIVES
  total_data.preservatives = step4_data.preservatives.reduce(function (
    acc,
    cur
  ) {
    return acc + cur.amount;
  },
  0);
  total_left_data.preservatives =
    lotionstore.step3_data.preservatives.amount - total_data.preservatives;

  //ESSENTIAL OIL
  total_data.essential_oil = step4_data.essential_oil.reduce(function (
    acc,
    cur
  ) {
    return acc + cur.amount;
  },
  0);
  total_left_data.essential_oil =
    lotionstore.step3_data.essential_oil.amount - total_data.essential_oil;

  //FRAGRANCE OIL
  total_data.fragrance_oil = step4_data.fragrance_oil.reduce(function (
    acc,
    cur
  ) {
    return acc + cur.amount;
  },
  0);
  total_left_data.fragrance_oil =
    lotionstore.step3_data.fragrance_oil.amount - total_data.fragrance_oil;

  //ACTIVES
  total_data.actives = step4_data.actives.reduce(function (acc, cur) {
    return acc + cur.amount;
  }, 0);
  total_left_data.actives =
    lotionstore.step3_data.actives.amount - total_data.actives;
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
  } else if (total_left_data.preservatives < 0) {
    total_left_data.preservatives = 0;
  } else if (total_left_data.essential_oil < 0) {
    total_left_data.essential_oil = 0;
  } else if (total_left_data.fragrance_oil < 0) {
    total_left_data.fragrance_oil = 0;
  } else if (total_left_data.actives < 0) {
    total_left_data.actives = 0;
  }
});

/*
CLOSE DROPDOWN ON CLICK OUTSIDE
*/
//OIL
const dropdown_oil = ref(null);
//BUTTER
const dropdown_butter = ref(null);
//EMULSIFIER
const dropdown_emulsifier = ref(null);
//THICKNER
const dropdown_thickner = ref(null);
//PRESERVATIVES
const dropdown_preservatives = ref(null);

//ESSENTIAL OIL
const dropdown_essential_oil = ref(null);

//FRAGRANCE OIL
const dropdown_fragrance_oil = ref(null);

//ACTIVES
const dropdown_actives = ref(null);

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
//PRESERVATIVES
useClickOutside(dropdown_preservatives, () => {
  toggle_preservatives_dropdown(null);
});

//ESSENTIAL OIL
useClickOutside(dropdown_essential_oil, () => {
  toggle_essential_oil_dropdown(null);
});

//FRAGRANCE OIL
useClickOutside(dropdown_fragrance_oil, () => {
  toggle_fragrance_oil_dropdown(null);
});

//ACTIVES
useClickOutside(dropdown_actives, () => {
  toggle_actives_dropdown(null);
});

const next_step4 = () => {
  console.log('NEXT', step4_data)
}
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
      <!-- WATER PHASE -->
      <div class="phase">
        <div class="phase-header">
          <div class="phases">
            <h1>Water Phase</h1>
          </div>
        </div>
        <div class="phase-sub">
          <!-- SUB ITEM | DISTILLED WATER -->
          <div
            class="sub-item"
            v-if="lotionstore.step3_data.distilled_water.added"
          >
            <div class="item-content">
              <h1>Distilled Water</h1>
              <input
                type="number"
                id="quantity"
                min="0"
                readonly
                v-model="lotionstore.step3_data.distilled_water.amount"
              />
            </div>
          </div>
          <!-- SUB ITEM | HYDROSOLS -->
          <div class="sub-item" v-if="lotionstore.step3_data.hydrosols.added">
            <div class="item-content">
              <h1>Hydrosols</h1>
              <input
                type="number"
                id="quantity"
                min="0"
                readonly
                v-model="lotionstore.step3_data.hydrosols.amount"
              />
            </div>
          </div>
          <!-- SUB ITEM | ALOE JUICE -->
          <div class="sub-item" v-if="lotionstore.step3_data.aloe_juice.added">
            <div class="item-content">
              <h1>Aloe Juice</h1>
              <input
                type="number"
                id="quantity"
                min="0"
                readonly
                v-model="lotionstore.step3_data.aloe_juice.amount"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- OIL PHASE -->
      <div class="phase">
        <div class="phase-header">
          <div class="phases">
            <h1>Oil Phase</h1>
          </div>
        </div>
        <div class="phase-sub">
          <!-- SUB ITEM | OILS -->
          <div class="sub-item" v-if="lotionstore.step3_data.oils.added">
            <transition name="percent_warning">
              <div
                class="percent_warning warning-1"
                v-if="total_data.oils > lotionstore.step3_data.oils.amount"
              >
                <p>
                  Your Total Has Exceeded
                  {{ lotionstore.step3_data.oils.amount }}
                </p>
              </div>
            </transition>
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
                  :max="`${lotionstore.step3_data.oils}`"
                  v-model="product.amount"
                />
              </div>
              <div class="total-container" v-if="step4_data.oils.length != 0">
                <p>Total: {{ total_data.oils }}%</p>
              </div>

              <div class="add-btn-container">
                <button class="add-btn" @click="add_oil_product">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <!-- SUB ITEM | BUTTERS -->
          <div class="sub-item" v-if="lotionstore.step3_data.butters.added">
            <transition name="percent_warning">
              <div
                class="percent_warning warning-1"
                v-if="
                  total_data.butters > lotionstore.step3_data.butters.amount
                "
              >
                <p>
                  Your Total Has Exceeded
                  {{ lotionstore.step3_data.butters.amount }}
                </p>
              </div>
            </transition>
            <div class="item-content">
              <h1>Butters</h1>
              <input
                type="number"
                id="quantity"
                min="0"
                readonly
                v-model="lotionstore.step3_data.butters.amount"
              />
            </div>
            <div
              class="percent-left-container"
              v-if="step4_data.butters.length != 0"
            >
              <p>You Have {{ total_left_data.butters }}% Left</p>
            </div>
            <div class="products-content" ref="dropdown_butter">
              <div
                class="product-item"
                v-for="product in step4_data.butters"
                :key="product.id"
              >
                <div class="delete-btn-container">
                  <div
                    class="delete-btn"
                    @click="delete_butter_product(product.id)"
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
                  </div>
                </div>
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
                  :max="`${lotionstore.step3_data.butters}`"
                  v-model="product.amount"
                />
              </div>
              <div
                class="total-container"
                v-if="step4_data.butters.length != 0"
              >
                <p>Total: {{ total_data.butters }}%</p>
              </div>

              <div class="add-btn-container">
                <button class="add-btn" @click="add_butter_product">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <!-- SUB ITEM | EMULSIFIER-->
          <div class="sub-item" v-if="lotionstore.step3_data.emulsifier.added">
            <transition name="percent_warning">
              <div
                class="percent_warning warning-1"
                v-if="
                  total_data.emulsifier >
                  lotionstore.step3_data.emulsifier.amount
                "
              >
                <p>
                  Your Total Has Exceeded
                  {{ lotionstore.step3_data.emulsifier.amount }}
                </p>
              </div>
            </transition>
            <div class="item-content">
              <h1>Emulsifier</h1>
              <input
                type="number"
                id="quantity"
                min="0"
                readonly
                v-model="lotionstore.step3_data.emulsifier.amount"
              />
            </div>
            <div
              class="percent-left-container"
              v-if="step4_data.emulsifier.length != 0"
            >
              <p>You Have {{ total_left_data.emulsifier }}% Left</p>
            </div>
            <div class="products-content" ref="dropdown_emulsifier">
              <div
                class="product-item"
                v-for="product in step4_data.emulsifier"
                :key="product.id"
              >
                <div class="delete-btn-container">
                  <div
                    class="delete-btn"
                    @click="delete_emulsifier_product(product.id)"
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
                  </div>
                </div>
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
                  :max="`${lotionstore.step3_data.emulsifier}`"
                  v-model="product.amount"
                />
              </div>
              <div
                class="total-container"
                v-if="step4_data.emulsifier.length != 0"
              >
                <p>Total: {{ total_data.emulsifier }}%</p>
              </div>

              <div class="add-btn-container"
              v-if="step4_data.emulsifier.length != 1">
                <button class="add-btn" @click="add_emulsifier_product">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <!-- SUB ITEM | THICKNER -->
          <div class="sub-item" v-if="lotionstore.step3_data.thickner.added">
            <transition name="percent_warning">
              <div
                class="percent_warning warning-1"
                v-if="
                  total_data.thickner > lotionstore.step3_data.thickner.amount
                "
              >
                <p>
                  Your Total Has Exceeded
                  {{ lotionstore.step3_data.thickner.amount }}
                </p>
              </div>
            </transition>
            <div class="item-content">
              <h1>Thickner</h1>
              <input
                type="number"
                id="quantity"
                min="0"
                readonly
                v-model="lotionstore.step3_data.thickner.amount"
              />
            </div>
            <div
              class="percent-left-container"
              v-if="step4_data.thickner.length != 0"
            >
              <p>You Have {{ total_left_data.thickner }}% Left</p>
            </div>
            <div class="products-content" ref="dropdown_thickner">
              <div
                class="product-item"
                v-for="product in step4_data.thickner"
                :key="product.id"
              >
                <div class="delete-btn-container">
                  <div
                    class="delete-btn"
                    @click="delete_thickner_product(product.id)"
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
                  </div>
                </div>
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
                  :max="`${lotionstore.step3_data.thickner}`"
                  v-model="product.amount"
                />
              </div>
              <div
                class="total-container"
                v-if="step4_data.thickner.length != 0"
              >
                <p>Total: {{ total_data.thickner }}%</p>
              </div>

              <div
                class="add-btn-container"
                v-if="step4_data.thickner.length != 1"
              >
                <button class="add-btn" @click="add_thickner_product">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- COOLING DOWN PHASE PHASE -->
      <div class="phase">
        <div class="phase-header">
          <div class="phases">
            <h1>Cooling Down Phase</h1>
          </div>
        </div>
        <div class="phase-sub">
          <!-- SUB ITEM | PRESERVATIVES -->
          <div
            class="sub-item"
            v-if="lotionstore.step3_data.preservatives.added"
          >
            <transition name="percent_warning">
              <div
                class="percent_warning warning-1"
                v-if="
                  total_data.preservatives >
                  lotionstore.step3_data.preservatives.amount
                "
              >
                <p>
                  Your Total Has Exceeded
                  {{ lotionstore.step3_data.preservatives.amount }}
                </p>
              </div>
            </transition>
            <div class="item-content">
              <h1>Preservatives</h1>
              <input
                type="number"
                id="quantity"
                min="0"
                readonly
                v-model="lotionstore.step3_data.preservatives.amount"
              />
            </div>
            <div
              class="percent-left-container"
              v-if="step4_data.preservatives.length != 0"
            >
              <p>You Have {{ total_left_data.preservatives }}% Left</p>
            </div>
            <div class="products-content" ref="dropdown_preservatives">
              <div
                class="product-item"
                v-for="product in step4_data.preservatives"
                :key="product.id"
              >
                <div class="delete-btn-container">
                  <div
                    class="delete-btn"
                    @click="delete_preservatives_product(product.id)"
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
                  </div>
                </div>
                <div class="dropdown-input">
                  <div
                    class="selected-item"
                    @click="toggle_preservatives_dropdown(product.id)"
                  >
                    <span v-if="product.product_Name">{{
                      product.product_Name
                    }}</span>
                    <span v-else>Selected Products</span>
                    <div
                      class="arrow"
                      :class="
                        product.id ==
                        dropdown_data.preservatives.current_dropdown
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
                      product.id == dropdown_data.preservatives.current_dropdown
                    "
                  >
                    <div class="dropdown-content">
                      <input
                        type="text"
                        v-model="dropdown_data.preservatives.searchQuery"
                        placeholder="Search For Preservatives"
                      />
                      <div
                        class="options"
                        v-for="(item, index) in filtered_preservatives"
                        :key="index"
                        @click="
                          select_preservatives_option(
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
                        v-if="filtered_preservatives.length === 0"
                      >
                        <span>Preservative Can't Be Found</span>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  id="quantity"
                  :max="`${lotionstore.step3_data.preservatives}`"
                  min="0"
                  v-model="product.amount"
                />
              </div>
              <div
                class="total-container"
                v-if="step4_data.preservatives.length != 0"
              >
                <p>Total: {{ total_data.preservatives }}%</p>
              </div>

              <div class="add-btn-container">
                <button class="add-btn" @click="add_preservatives_product">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <!-- SUB ITEM | ESSENTIAL OIL -->
          <div
            class="sub-item"
            v-if="lotionstore.step3_data.essential_oil.added"
          >
            <transition name="percent_warning">
              <div
                class="percent_warning warning-1"
                v-if="
                  total_data.essential_oil >
                  lotionstore.step3_data.essential_oil.amount
                "
              >
                <p>
                  Your Total Has Exceeded
                  {{ lotionstore.step3_data.essential_oil.amount }}
                </p>
              </div>
            </transition>
            <div class="item-content">
              <h1>ESSENTIAL OIL</h1>
              <input
                type="number"
                id="quantity"
                min="0"
                readonly
                v-model="lotionstore.step3_data.essential_oil.amount"
              />
            </div>
            <div
              class="percent-left-container"
              v-if="step4_data.essential_oil.length != 0"
            >
              <p>You Have {{ total_left_data.essential_oil }}% Left</p>
            </div>
            <div class="products-content" ref="dropdown_essential_oil">
              <div
                class="product-item"
                v-for="product in step4_data.essential_oil"
                :key="product.id"
              >
                <div class="delete-btn-container">
                  <div
                    class="delete-btn"
                    @click="delete_essential_oil_product(product.id)"
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
                  </div>
                </div>
                <div class="dropdown-input">
                  <div
                    class="selected-item"
                    @click="toggle_essential_oil_dropdown(product.id)"
                  >
                    <span v-if="product.product_Name">{{
                      product.product_Name
                    }}</span>
                    <span v-else>Selected Products</span>
                    <div
                      class="arrow"
                      :class="
                        product.id ==
                        dropdown_data.essential_oil.current_dropdown
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
                      product.id == dropdown_data.essential_oil.current_dropdown
                    "
                  >
                    <div class="dropdown-content">
                      <input
                        type="text"
                        v-model="dropdown_data.essential_oil.searchQuery"
                        placeholder="Search For Essential Oil"
                      />
                      <div
                        class="options"
                        v-for="(item, index) in filtered_essential_oil"
                        :key="index"
                        @click="
                          select_essential_oil_option(
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
                        v-if="filtered_essential_oil.length === 0"
                      >
                        <span>Essential Oil Can't Be Found</span>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  :max="`${lotionstore.step3_data.essential_oil}`"
                  v-model="product.amount"
                />
              </div>
              <div
                class="total-container"
                v-if="step4_data.essential_oil.length != 0"
              >
                <p>Total: {{ total_data.essential_oil }}%</p>
              </div>

              <div class="add-btn-container">
                <button class="add-btn" @click="add_essential_oil_product">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <!-- SUB ITEM | FRAGRANCE OIL -->
          <div
            class="sub-item"
            v-if="lotionstore.step3_data.fragrance_oil.added"
          >
            <transition name="percent_warning">
              <div
                class="percent_warning warning-1"
                v-if="
                  total_data.fragrance_oil >
                  lotionstore.step3_data.fragrance_oil.amount
                "
              >
                <p>
                  Your Total Has Exceeded
                  {{ lotionstore.step3_data.fragrance_oil.amount }}
                </p>
              </div>
            </transition>
            <div class="item-content">
              <h1>Fragrance Oil</h1>
              <input
                type="number"
                id="quantity"
                min="0"
                readonly
                v-model="lotionstore.step3_data.fragrance_oil.amount"
              />
            </div>
            <div
              class="percent-left-container"
              v-if="step4_data.fragrance_oil.length != 0"
            >
              <p>You Have {{ total_left_data.fragrance_oil }}% Left</p>
            </div>
            <div class="products-content" ref="dropdown_fragrance_oil">
              <div
                class="product-item"
                v-for="product in step4_data.fragrance_oil"
                :key="product.id"
              >
                <div class="delete-btn-container">
                  <div
                    class="delete-btn"
                    @click="delete_fragrance_oil_product(product.id)"
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
                  </div>
                </div>
                <div class="dropdown-input">
                  <div
                    class="selected-item"
                    @click="toggle_fragrance_oil_dropdown(product.id)"
                  >
                    <span v-if="product.product_Name">{{
                      product.product_Name
                    }}</span>
                    <span v-else>Selected Products</span>
                    <div
                      class="arrow"
                      :class="
                        product.id ==
                        dropdown_data.fragrance_oil.current_dropdown
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
                      product.id == dropdown_data.fragrance_oil.current_dropdown
                    "
                  >
                    <div class="dropdown-content">
                      <input
                        type="text"
                        v-model="dropdown_data.fragrance_oil.searchQuery"
                        placeholder="Search For Fragrance Oil"
                      />
                      <div
                        class="options"
                        v-for="(item, index) in filtered_fragrance_oil"
                        :key="index"
                        @click="
                          select_fragrance_oil_option(
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
                        v-if="filtered_fragrance_oil.length === 0"
                      >
                        <span>Fragrance Oil Can't Be Found</span>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  :max="`${lotionstore.step3_data.fragrance_oil}`"
                  v-model="product.amount"
                />
              </div>
              <div
                class="total-container"
                v-if="step4_data.fragrance_oil.length != 0"
              >
                <p>Total: {{ total_data.fragrance_oil }}%</p>
              </div>

              <div class="add-btn-container">
                <button class="add-btn" @click="add_fragrance_oil_product">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <!-- SUB ITEM | ACTIVES -->
          <div class="sub-item" v-if="lotionstore.step3_data.actives.added">
            <transition name="percent_warning">
              <div
                class="percent_warning warning-1"
                v-if="
                  total_data.actives > lotionstore.step3_data.actives.amount
                "
              >
                <p>
                  Your Total Has Exceeded
                  {{ lotionstore.step3_data.actives.amount }}
                </p>
              </div>
            </transition>
            <div class="item-content">
              <h1>Actives</h1>
              <input
                type="number"
                id="quantity"
                min="0"
                readonly
                v-model="lotionstore.step3_data.actives.amount"
              />
            </div>
            <div
              class="percent-left-container"
              v-if="step4_data.actives.length != 0"
            >
              <p>You Have {{ total_left_data.actives }}% Left</p>
            </div>
            <div class="products-content" ref="dropdown_actives">
              <div
                class="product-item"
                v-for="product in step4_data.actives"
                :key="product.id"
              >
                <div class="delete-btn-container">
                  <div
                    class="delete-btn"
                    @click="delete_actives_product(product.id)"
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
                  </div>
                </div>
                <div class="dropdown-input">
                  <div
                    class="selected-item"
                    @click="toggle_actives_dropdown(product.id)"
                  >
                    <span v-if="product.product_Name">{{
                      product.product_Name
                    }}</span>
                    <span v-else>Selected Products</span>
                    <div
                      class="arrow"
                      :class="
                        product.id == dropdown_data.actives.current_dropdown
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
                    v-if="product.id == dropdown_data.actives.current_dropdown"
                  >
                    <div class="dropdown-content">
                      <input
                        type="text"
                        v-model="dropdown_data.actives.searchQuery"
                        placeholder="Search For Actives"
                      />
                      <div
                        class="options"
                        v-for="(item, index) in filtered_actives"
                        :key="index"
                        @click="
                          select_actives_option(product.id, item.product_name)
                        "
                      >
                        <ul>
                          <li class="option">{{ item.product_name }}</li>
                        </ul>
                      </div>
                      <div class="default" v-if="filtered_actives.length === 0">
                        <span>Active Oil Can't Be Found</span>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  :max="`${lotionstore.step3_data.actives}`"
                  v-model="product.amount"
                />
              </div>
              <div
                class="total-container"
                v-if="step4_data.actives.length != 0"
              >
                <p>Total: {{ total_data.actives }}%</p>
              </div>

              <div class="add-btn-container">
                <button class="add-btn" @click="add_actives_product">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <!-- SUB ITEM | TOCOPHEROL -->
          <div class="sub-item" v-if="lotionstore.step3_data.tocopherol.added">
            <div class="item-content">
              <h1>Tocopherol/Vitamin E</h1>
              <input
                type="number"
                id="quantity"
                min="0"
                readonly
                v-model="lotionstore.step3_data.tocopherol.amount"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="btn-container">
      <button class="btn" @click="lotionstore.change_step('step3')">Back</button>
      <button class="btn" @click="next_step4()">Calculate</button>
    </div>
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
.sub-item .percent_warning {
  top: initial;
  bottom: 25px;
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
/* .sub-item .products-content .add-btn-container button {
  background: none;
  border: none;
  font-size: 17px;
  cursor: pointer;
} */
.sub-item .products-content .add-btn-container .add-btn {
  background: none;
  border: 1px solid var(--color-green);
  color: var(--color-green);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.sub-item .products-content .add-btn-container .add-btn:hover {
  transform: scale(1.06);
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
