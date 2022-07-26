<script setup lang="ts">
/*
Imports
*/
import { ref, reactive, watch } from "vue";
import Accordion from "../components/Accordion.vue";
</script>

<template>
  <section>
    <header>
        <h1>FAQs</h1>
      <h2>Have Questions?</h2>
    </header>
    <Accordion />
  </section>
</template>

<style scoped>
section {
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 20px;
}
header h2 {
  max-width: 16.375rem /* 262px */;
  margin: 0 auto;
  font-size: 20px;
  font-weight: 500;
  line-height: 140%;
  position: relative;
}
header h2::before {
  content: "";
  display: block;
  width: 2.5rem;
  height: 0.25rem;
  position: absolute;
  top: 12px;
  left: 0px;
  background: var(--color-green);
}
header h2::after {
  content: "";
  display: block;
  width: 2.5rem;
  height: 0.25rem;
  position: absolute;
  top: 12px;
  right: 0px;
  background: var(--color-green);
}
</style>
