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
  <div class="toast-wrapper">
    <div class="toast">
      <h3>{{ lotionstore.toast_message }}</h3>
    </div>
  </div>
</template>
<style scoped>
/* Toast Warning */
.toast-wrapper {
  position: fixed;
  width: 100%;
  top: 50px;
  z-index: 500;
  padding: 0 20px;
}
.toast {
  padding: 20px;
  color: var(--color-primary);
  background: #ff0062;
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}
.lotion-section {
  padding: 42px 14px 98px;
}
</style>
