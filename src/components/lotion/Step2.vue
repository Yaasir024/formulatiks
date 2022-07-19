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
STEP TWO(2)
*/
/*
Phases Percentage Data
*/
const phases = reactive({
  water_phase: 0,
  oil_phase: 0,
  cooling_down_phase: 0,
});

/*
Computing Phase Total the phases total
*/
const total_phase_percent = ref(0);
const total_phase_percent_left = ref(100);
watch(phases, () => {
  total_phase_percent.value =
    phases.water_phase + phases.oil_phase + phases.cooling_down_phase;
  total_phase_percent_left.value = 100 - total_phase_percent.value;
});

const show_phase_warning = ref(false);
watch(total_phase_percent, () => {
  if (total_phase_percent.value > 100) {
    show_phase_warning.value = true;
  } else {
    show_phase_warning.value = false;
  }
});

watch(total_phase_percent_left, () => {
  if (total_phase_percent_left.value < 0) {
    total_phase_percent_left.value = 0;
  }
});

/*
Next Step
*/
const next_step2 = (step: any) => {
  if (total_phase_percent.value != 100) {
    lotionstore.toast_message = "Sorry, Total is not equal to 100% !!";
    lotionstore.toast = true;
    setTimeout(() => (lotionstore.toast = false), 3000);
  } else if (
    phases.water_phase == 0 ||
    phases.oil_phase == 0 ||
    phases.cooling_down_phase == 0
  ) {
    lotionstore.toast_message = "All Phases must be assigned a value greater than 0";
    lotionstore.toast = true;
    setTimeout(() => (lotionstore.toast = false), 3000);
  } else {
    lotionstore.next_step2(step, phases)
  }
};

</script>


<template>
    <section class="step-2 steps">
      <header>
        <h1>STEP 2</h1>
        <div class="sub-heading">
          <p>Divide 100% between the three phases</p>
        </div>
      </header>
      <main>
        <transition name="percent_warning">
          <div class="percent_warning" v-if="show_phase_warning">
            <p>Your Total Has Exceeded 100% !!</p>
          </div>
        </transition>
        <div class="percent-left-container">
          <p>You Have {{ total_phase_percent_left }}% Left</p>
        </div>
        <div class="phases-container">
          <div class="phases">
            <h1>Water Phase</h1>
            <input
              type="number"
              id="quantity"
              min="0"
              max="100"
              v-model="phases.water_phase"
            />
          </div>
          <div class="phases">
            <h1>Oil Phase</h1>
            <input
              type="number"
              id="quantity"
              min="0"
              max="100"
              v-model="phases.oil_phase"
            />
          </div>
          <div class="phases">
            <h1>Cooling Down Phase</h1>
            <input
              type="number"
              id="quantity"
              min="0"
              max="100"
              v-model="phases.cooling_down_phase"
            />
          </div>
        </div>
        <div class="total-container">
          <p>Total: {{ total_phase_percent }}%</p>
        </div>
      </main>

      <div class="btn-container">
        <button class="btn">Back</button>
        <button class="btn" @click="next_step2('step3')">Next</button>
      </div>
    </section>
</template>