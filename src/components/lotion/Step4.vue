<script setup lang="ts">
/*
Imports
*/
import { ref, reactive, watch, computed } from "vue";
import { lotionStore } from "@/stores/lotion";
import { v4 as uuid } from "uuid";

/*
Use Lotion Store 
*/
const lotionstore = lotionStore();

/*
Step 4 data
*/
const step4_data = reactive({
  oils: [
    {
      id: 1234,
      product_Name: "Selected Products",
    },
    {
      id: 12345,
      product_Name: "Selected Products",
    },
  ],
});

const dropdown_data = reactive({
  oils: {
    searchQuery: "",
    selectedItem: null,
    current_dropdown: null,
  },
});
/*
Products Data
*/
/*
OPEN OILS DROPDOWN FUNCTION
*/
const open_oils_dropdown = (id: any) => {
  if (dropdown_data.oils.current_dropdown != id) {
    dropdown_data.oils.current_dropdown = id;
  } else {
    dropdown_data.oils.current_dropdown = null;
  }
};
const filtered_oils = computed(() => {
  const query = ref(dropdown_data.oils.searchQuery.toLowerCase());
  if (dropdown_data.oils.searchQuery === "") {
    return products_data.oils;
  }
  return products_data.oils.filter((item) => {
    return Object.values(item).some((word) =>
      String(word).toLowerCase().includes(query.value)
    );
  });
});

const select_oil_option = (id:any, name:any) => {
  console.log(id, name)
  step4_data.oils.forEach((element, index) => {
    if(element.id === id) {
        element.product_Name = name;
    }
});
dropdown_data.oils.current_dropdown = null;
}

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
});
const addNewProduct = () => {
  // step4_data.oils.push({
  //   id: 1,
  //   product_Name: "Argan Oil",
  // });
};
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
              <h1>Oils</h1>
              <input
                type="number"
                id="quantity"
                min="0"
                readonly
                v-model="lotionstore.step3_data.oils.amount"
              />
            </div>
            <div class="products-content">
              <div class="add-btn-container">
                <button class="add-btn" @click="addNewProduct">Add +</button>
              </div>
              <div
                class="product-item"
                v-for="(product, index) in step4_data.oils"
                :key="index"
              >
                <div class="dropdown-input">
                  <div
                    class="selected-item"
                    @click="open_oils_dropdown(product.id)"
                  >
                    <span>{{product.product_Name}}</span>
                    <div class="arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        width="16"
                        height="16"
                        stroke="currentColor"
                        v-if="product.id != dropdown_data.oils.current_dropdown"
                      >
                        <path
                          d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        width="16"
                        height="16"
                        stroke="currentColor"
                        v-if="product.id == dropdown_data.oils.current_dropdown"
                      >
                        <path
                          d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
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
                        @click="select_oil_option(product.id, item.product_name)"
                      >
                        <ul>
                          <li class="option">{{ item.product_name }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  v-model="lotionstore.step3_data.oils.amount"
                />
              </div>
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
.sub-item .products-content {
  margin: 10px 0;
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
}
.sub-item .product-item .dropdown-input {
  width: 100%;
  margin-right: 20px;
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
</style>
