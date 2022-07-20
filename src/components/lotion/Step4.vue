<script setup lang="ts">
/*
Imports
*/
import { ref, reactive, watch } from "vue";
import { lotionStore } from "@/stores/lotion";

/*
Use Lotion Store 
*/
const lotionstore = lotionStore();

/*
Step 4 data
*/
const search_query = ref("");
const step4_data = reactive({
  oils: [
    {
      id: 1,
      product_Name: "Argan Oil",
    },
  ],
});


const dropdown_data = reactive({
  oils: {
    searchQuery: "",
    selectedItem: null,
    current_dropdown: ''
  }
})
/*
Products Data
*/
const products_data = reactive({
  oils: [
    {
      id: 1,
      product_Name: "Argan Oil",
    },
    {
      id: 1,
      product_Name: "Shea Oil",
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
                  <div class="selected-item">
                    <span>Selected Product</span>
                  </div>
                  <div class="dropdown-popup">
                    <div class="dropdown-content">
                      <input
                        type="text"
                        v-model="search_query"
                        placeholder="Search For Oils"
                      />
                      <div class="options">
                      <ul>
                        <li class="option">Argan Oil</li>
                        <li class="option">BeezWax Oil</li>
                        <li class="option">Coconut Oil</li>
                        <li class="option">Demr Oil</li>
                        <li class="option">Earnut Oil</li>
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
