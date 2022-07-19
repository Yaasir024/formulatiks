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
</script>
<template>
  <section class="step-1">
    <header>
      <h1>STEP 1</h1>
      <div class="sub-heading">
        <p>State The Quantity of Lotion You Wish To Produce</p>
      </div>
    </header>
    <main>
      <div class="input-container">
        <input type="number" id="quantity" min="0" max="100" />
        <select name="cars" id="cars">
          <option value="volvo">Kg</option>
          <option value="saab">grams</option>
        </select>
      </div>
    </main>
  </section>
</template>

<style scoped>
.input-container {
    display: flex;
    align-items: center;
    max-width: 300px;
    margin: 0 auto;
    margin-top: 30px;
}
input[type="number"] {
  width: 100%;
  min-height: 40px;
  background: var(--color-primary);
  box-shadow: 0 0 15px rgb(0 0 0 / 15%);
  border-radius: 9px;
  padding: 8px 15px;
  outline: none;
  margin-right: 10px;
}
</style>
