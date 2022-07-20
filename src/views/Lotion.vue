<script setup lang="ts">
/*
Imports
*/
import Toast from "@/components/lotion/Toast.vue";
import Step1 from "@/components/lotion/Step1.vue";
import Step2 from "@/components/lotion/Step2.vue";
import Step3 from "@/components/lotion/Step3.vue";
import Step4 from "@/components/lotion/Step4.vue";
import Loading1 from "@/components/Loading1.vue";
import { ref, reactive, watch } from "vue";
import { lotionStore } from "@/stores/lotion";

/*
Use Lotion Store 
*/
const lotionstore = lotionStore();
</script>

<template>
  <Loading1 v-if="lotionstore.loading"/>
  <transition name="toast">
    <Toast v-if="lotionstore.toast" />
  </transition>
  <section class="lotion-section">
    <Step1 v-if="lotionstore.current_step == 'step1'" />
    <Step2 v-if="lotionstore.current_step == 'step2'" />
    <Step3 v-if="lotionstore.current_step == 'step3'" />
    <Step4 v-if="lotionstore.current_step == 'step4'" />
  </section>
</template>

<style>
/* Styling Inputs */
.lotion-section {
  padding: 40px 20px;
}
input[type="number"] {
  width: 50px;
  background: var(--color-background);
  border: 1px solid #ccc;
  padding: 8px 15px;
  outline: none;
}

/* Phases Section */
.steps {
  max-width: 500px;
  margin: 0 auto;
}
/* step header */
header {
  text-align: center;
  margin-bottom: 10px;
}
header h1 {
  font-size: 25px;
  font-weight: 700;
}
header .sub-heading {
  margin-top: 15px;
}
header .sub-heading p {
  font-size: 16px;
  line-height: 1.8;
}
/* Steps Main */
.steps main {
  position: relative;
  padding: 20px 0;
}
.percent-left-container {
  margin-top: 25px;
}
.percent-left-container p {
  font-size: 18px;
  line-height: 1.8;
  font-weight: 500;
}
.phases-container {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
}
.phases {
  width: 100%;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-primary);
  box-shadow: 0 0 15px rgb(0 0 0 / 15%);
  border-radius: 10px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease-in;
}
.phases:hover {
  transform: scale(1.02);
}

.total-container {
  text-align: right;
  padding-right: 5px;
  margin-top: 5px;
}
.total-container p {
  font-size: 18px;
  line-height: 1.8;
  font-weight: 500;
}



.btn-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* text-align: right; */
  margin-top: 20px;
}
.btn {
  color: var(--color-primary);
  cursor: pointer;
  background-color: #17a98a;

  padding: 10px 18px;
  border-radius: 6px;
  border: none;
}

/* Percent Warning */
.percent_warning {
  z-index: 20;
  position: absolute;
  top: 10px;
  width: 100%;
  text-align: center;
}
.percent_warning p {
  color: var(--color-red);
  font-size: 16px;
  line-height: 1.8;
  font-weight: 500;
}
/* percent_warning Animation */
.percent_warning-enter-active,
.percent_warning-leave-active {
  transition: 0.5s ease all;
}
.percent_warning-enter-from,
.percent_warning-leave-to {
  /* transform: translateY(-70px); */
  transform: scale(0);
}
/* Toast Animation */

.toast-enter-active {
  animation: wobble 0.5s ease;
}
.toast-enter-from {
  opacity: 1;
  transform: translateY(0px);
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(-90px);
}
.toast-leave-active {
  transition: 0.3s ease all;
}

@keyframes wobble {
  0% {
    transform: translateY(-90px);
    opacity: 0;
  }
  50% {
    transform: translateY(0px);
    opacity: 1;
  }
  60% {
    transform: translateX(8px);
  }
  70% {
    transform: translateX(-8px);
  }
  80% {
    transform: translateX(4px);
  }
  90% {
    transform: translateX(-4px);
  }
  100% {
    transform: translateX(0);
  }
}

/* Remove Arrows from Number Input */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
