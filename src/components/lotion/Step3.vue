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
STEP THREE(3)
*/
const step3_data = reactive({
  distilled_water: {
    added: true,
    amount: 0,
    total: 0
  },
  hydrosols: {
    added: true,
    amount: 0,
    total: 0
  },
  aloe_juice: {
    added: true,
    amount: 0,
    total: 0
  },
  oils: {
    added: true,
    amount: 0,
    total: 0
  },
  butters: {
    added: true,
    amount: 0,
    total: 0
  },
  emulsifier: {
    added: true,
    amount: 0,
    total: 0
  },
  thickner: {
    added: true,
    amount: 0,
    total: 0
  },
  preservatives: {
    added: true,
    amount: 0,
    total: 0
  },
  essential_oil: {
    added: true,
    amount: 0,
    total: 0
  },
  fragrance_oil: {
    added: true,
    amount: 0,
    total: 0
  },
  actives: {
    added: true,
    amount: 0,
    total: 0
  },
  tocopherol: {
    added: true,
    amount: 0,
    total: 0
  },
});
const change_status = (item: any) => {
  if (item == "distilled_water") {
    step3_data.distilled_water.added = !step3_data.distilled_water.added;
    step3_data.distilled_water.amount = 0;
  } else if (item == "hydrosols") {
    step3_data.hydrosols.added = !step3_data.hydrosols.added;
    step3_data.hydrosols.amount = 0;
  } else if (item == "aloejuice") {
    step3_data.aloe_juice.added = !step3_data.aloe_juice.added;
    step3_data.aloe_juice.amount = 0;
  } else if (item == "oils") {
    step3_data.oils.added = !step3_data.oils.added;
    step3_data.oils.amount = 0;
  } else if (item == "butters") {
    step3_data.butters.added = !step3_data.butters.added;
    step3_data.butters.amount = 0;
  } else if (item == "emulsifier") {
    step3_data.emulsifier.added = !step3_data.emulsifier.added;
    step3_data.emulsifier.amount = 0;
  } else if (item == "thickner") {
    step3_data.thickner.added = !step3_data.thickner.added;
    step3_data.thickner.amount = 0;
  } else if (item == "preservatives") {
    step3_data.preservatives.added = !step3_data.preservatives.added;
    step3_data.preservatives.amount = 0;
  } else if (item == "essentialoil") {
    step3_data.essential_oil.added = !step3_data.essential_oil.added;
    step3_data.essential_oil.amount = 0;
  } else if (item == "fragranceoil") {
    step3_data.fragrance_oil.added = !step3_data.fragrance_oil.added;
    step3_data.fragrance_oil.amount = 0;
  } else if (item == "actives") {
    step3_data.actives.added = !step3_data.actives.added;
    step3_data.actives.amount = 0;
  } else if (item == "tocopherol") {
    step3_data.tocopherol.added = !step3_data.tocopherol.added;
    step3_data.tocopherol.amount = 0;
  }
};
/*
Computing Phase Total the phases total
*/
//ALL TOTAL LEFT FOR EACH PHASES
const total_left_step3 = reactive({
  water_phase: lotionstore.phases.water_phase,
  oil_phase: lotionstore.phases.oil_phase,
  cooling_down_phase: lotionstore.phases.cooling_down_phase,
});
//ALL TOTAL FOR EACH PHASES
const total_step3 = reactive({
  water_phase: 0,
  oil_phase: 0,
  cooling_down_phase: 0,
  oils: 0,
});
const waterphase_warning = ref(false);
const oilphase_warning = ref(false);
const oilphase_thicknertip = ref(true);
watch(step3_data, () => {
  //STEP 3 WATER_PHASE
  total_step3.water_phase =
    step3_data.distilled_water.amount +
    step3_data.hydrosols.amount +
    step3_data.aloe_juice.amount;
  total_left_step3.water_phase = lotionstore.phases.water_phase - total_step3.water_phase;
  if (
    !step3_data.distilled_water.added &&
    !step3_data.hydrosols.added &&
    !step3_data.aloe_juice.added
  ) {
    waterphase_warning.value = true;
  } else {
    waterphase_warning.value = false;
  }

  //STEP 3 OIL_PHASE
  total_step3.oil_phase =
    step3_data.oils.amount +
    step3_data.butters.amount +
    step3_data.emulsifier.amount +
    step3_data.thickner.amount;
  total_left_step3.oil_phase = lotionstore.phases.oil_phase - total_step3.oil_phase;
  if (!step3_data.oils.added && !step3_data.butters.added) {
    oilphase_warning.value = true;
  } else {
    oilphase_warning.value = false;
  }
  if (!step3_data.thickner.added || step3_data.thickner.amount > 0) {
    oilphase_thicknertip.value = false;
  }
  // Total Oils
  total_step3.oils =
    step3_data.oils.amount +
    step3_data.essential_oil.amount +
    step3_data.fragrance_oil.amount;

  // CALCULATE EMULSIFIER VALUE
  step3_data.emulsifier.amount = (25 / 100) * total_step3.oils;

  //STEP 3 COOLING DOWN PHASE
  total_step3.cooling_down_phase =
    step3_data.preservatives.amount +
    step3_data.essential_oil.amount +
    step3_data.fragrance_oil.amount +
    step3_data.actives.amount +
    step3_data.tocopherol.amount;
  total_left_step3.cooling_down_phase =
    lotionstore.phases.cooling_down_phase - total_step3.cooling_down_phase;
});

//RESET THE AMOUNT LEFT TO 0 IF LESS THAN 0 (TO AVOID NEGATIVE NUMBERS)
watch(total_left_step3, () => {
  if (total_left_step3.water_phase < 0) {
    total_left_step3.water_phase = 0;
  } else if (total_left_step3.oil_phase < 0) {
    total_left_step3.oil_phase = 0;
  } else if (total_left_step3.cooling_down_phase < 0) {
    total_left_step3.cooling_down_phase = 0;
  }
});
const next_step3 = (step: any) => {
  lotionstore.toast_message = "";
  lotionstore.toast = false;
  if (
    total_step3.water_phase +
      total_step3.oil_phase +
      total_step3.cooling_down_phase !=
    100
  ) {
    lotionstore.toast_message = "Total Should be Equal to 100";
    lotionstore.toast = true;
    setTimeout(() => (lotionstore.toast = false), 3000);
  } else if (
    (step3_data.distilled_water.added &&
      step3_data.distilled_water.amount <= 0) ||
    (step3_data.hydrosols.added && step3_data.hydrosols.amount <= 0) ||
    (step3_data.aloe_juice.added && step3_data.aloe_juice.amount <= 0) ||
    (step3_data.oils.added && step3_data.oils.amount <= 0) ||
    (step3_data.butters.added && step3_data.butters.amount <= 0) ||
    (step3_data.emulsifier.added && step3_data.emulsifier.amount <= 0) ||
    (step3_data.thickner.added && step3_data.thickner.amount <= 0) ||
    (step3_data.preservatives.added && step3_data.preservatives.amount <= 0) ||
    (step3_data.essential_oil.added && step3_data.essential_oil.amount <= 0) ||
    (step3_data.fragrance_oil.added && step3_data.fragrance_oil.amount <= 0) ||
    (step3_data.actives.added && step3_data.actives.amount <= 0) ||
    (step3_data.tocopherol.added && step3_data.tocopherol.amount <= 0)
  ) {
    lotionstore.toast_message = "Sorry, All Selected Item Must Have a Positive Value";
    lotionstore.toast = true;
    setTimeout(() => (lotionstore.toast = false), 3000);
  } else if (
    !step3_data.distilled_water.added &&
    !step3_data.hydrosols.added &&
    !step3_data.aloe_juice.added
  ) {
    lotionstore.toast_message =
      "Sorry, You must Choose at least one item in Water Phase";
    lotionstore.toast = true;
    setTimeout(() => (lotionstore.toast = false), 3000);
  } else if (!step3_data.oils.added && !step3_data.butters.added) {
    lotionstore.toast_message =
      "Sorry, You must Choose at least one between Oils and Butters";
    lotionstore.toast = true;
    setTimeout(() => (lotionstore.toast = false), 3000);
  } else if (total_step3.water_phase != lotionstore.phases.water_phase) {
    lotionstore.toast_message =
      "Your Water Phase Total Should be Equal to " + lotionstore.phases.water_phase;
    lotionstore.toast = true;
    setTimeout(() => (lotionstore.toast = false), 3000);
  } else if (total_step3.oil_phase != lotionstore.phases.oil_phase) {
    lotionstore.toast_message =
      "Your Oil Total Phase Should be Equal to " + lotionstore.phases.oil_phase;
    lotionstore.toast = true;
    setTimeout(() => (lotionstore.toast = false), 3000);
  } else if (total_step3.cooling_down_phase != lotionstore.phases.cooling_down_phase) {
    lotionstore.toast_message =
      "Your Cooling Down Phase Should be Equal to " + lotionstore.phases.cooling_down_phase;
    lotionstore.toast = true;
    setTimeout(() => (lotionstore.toast = false), 3000);
  } else {
    lotionstore.next_step3(step3_data)
  }
};
</script>
<template>
  <section class="step-3 steps">
    <header>
      <h1>STEP 3</h1>
      <div class="sub-heading">
        <p>Divide 100% between the three phases</p>
      </div>
    </header>
    <main>
      <div class="phases-container">
        <div class="phase-details">
          <transition name="percent_warning">
            <div
              class="percent_warning"
              v-if="total_step3.water_phase > lotionstore.phases.water_phase"
            >
              <p>
                Your Total Has Exceeded {{ lotionstore.phases.water_phase }}% !!
              </p>
            </div>
          </transition>
          <transition name="percent_warning">
            <div class="percent_warning" v-if="waterphase_warning">
              <p>Sorry, You must Choose at least one item in this phase</p>
            </div>
          </transition>
          <div class="phases">
            <h1>Water Phase</h1>
            <input
              type="number"
              class="phase-value"
              min="0"
              max="100"
              readonly
              v-model="lotionstore.phases.water_phase"
            />
          </div>
          <div class="phase-sub">
            <div class="percent-left-container">
              <p>You Have {{ total_left_step3.water_phase }}% Left</p>
            </div>
            <div class="sub-item">
              <div class="action-btn-container">
                <div
                  class="action-btn add"
                  v-if="!step3_data.distilled_water.added"
                  @click="change_status('distilled_water')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
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
                </div>
                <div
                  class="action-btn remove"
                  v-if="step3_data.distilled_water.added"
                  @click="change_status('distilled_water')"
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
              <div class="item-content">
                <h1>Distilled Water</h1>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  :max="`${lotionstore.phases.water_phase}`"
                  v-model="step3_data.distilled_water.amount"
                  v-if="step3_data.distilled_water.added"
                />
              </div>
            </div>
            <div class="sub-item">
              <div class="action-btn-container">
                <div
                  class="action-btn add"
                  v-if="!step3_data.hydrosols.added"
                  @click="change_status('hydrosols')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
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
                </div>
                <div
                  class="action-btn remove"
                  v-if="step3_data.hydrosols.added"
                  @click="change_status('hydrosols')"
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
              <div class="item-content">
                <h1>Hydrosols</h1>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  :max="`${lotionstore.phases.water_phase}`"
                  v-model="step3_data.hydrosols.amount"
                  v-if="step3_data.hydrosols.added"
                />
              </div>
            </div>
            <div class="sub-item">
              <div class="action-btn-container">
                <div
                  class="action-btn add"
                  v-if="!step3_data.aloe_juice.added"
                  @click="change_status('aloejuice')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
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
                </div>
                <div
                  class="action-btn remove"
                  v-if="step3_data.aloe_juice.added"
                  @click="change_status('aloejuice')"
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
              <div class="item-content">
                <h1>Aloe Juice</h1>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  :max="`${lotionstore.phases.water_phase}`"
                  v-model="step3_data.aloe_juice.amount"
                  v-if="step3_data.aloe_juice.added"
                />
              </div>
            </div>
            <div class="total-container">
              <p>Total: {{ total_step3.water_phase }}%</p>
            </div>
          </div>
        </div>
        <div class="phase-details oil-phase">
          <transition name="percent_warning">
            <div
              class="percent_warning warning-1"
              v-if="total_step3.oil_phase > lotionstore.phases.oil_phase"
            >
              <p>
                Your Total Has Exceeded {{ lotionstore.phases.oil_phase }}% !!
              </p>
            </div>
          </transition>
          <transition name="percent_warning">
            <div class="percent_warning warning-2" v-if="oilphase_warning">
              <p>
                Sorry, You must Choose at least one between Oils and Butters
              </p>
            </div>
          </transition>
          <div class="phases">
            <h1>Oil Phase</h1>
            <input
              type="number"
              class="phase-value"
              min="0"
              max="100"
              readonly
              v-model="lotionstore.phases.oil_phase"
            />
          </div>
          <div class="phase-sub">
            <div class="percent-left-container">
              <p>You Have {{ total_left_step3.oil_phase }}% Left</p>
            </div>
            <div class="sub-item">
              <div class="action-btn-container">
                <div
                  class="action-btn add"
                  v-if="!step3_data.oils.added"
                  @click="change_status('oils')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
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
                </div>
                <div
                  class="action-btn remove"
                  v-if="step3_data.oils.added"
                  @click="change_status('oils')"
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
              <div class="item-content">
                <h1>Oils</h1>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  :max="`${lotionstore.phases.oil_phase}`"
                  v-model="step3_data.oils.amount"
                  v-if="step3_data.oils.added"
                />
              </div>
            </div>
            <div class="sub-item">
              <div class="action-btn-container">
                <div
                  class="action-btn add"
                  v-if="!step3_data.butters.added"
                  @click="change_status('butters')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
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
                </div>
                <div
                  class="action-btn remove"
                  v-if="step3_data.butters.added"
                  @click="change_status('butters')"
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
              <div class="item-content">
                <h1>Butters</h1>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  :max="`${lotionstore.phases.oil_phase}`"
                  v-model="step3_data.butters.amount"
                  v-if="step3_data.butters.added"
                />
              </div>
            </div>
            <div class="sub-item">
              <div class="action-btn-container">
                <div class="action-btn"></div>
              </div>
              <div class="item-content">
                <h1>Emulsifier</h1>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  :max="`${lotionstore.phases.oil_phase}`"
                  readonly
                  v-model="step3_data.emulsifier.amount"
                  v-if="step3_data.emulsifier.added"
                />
              </div>
            </div>
            <div class="sub-item">
              <div class="action-btn-container">
                <div
                  class="action-btn add"
                  v-if="!step3_data.thickner.added"
                  @click="change_status('thickner')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
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
                </div>
                <div
                  class="action-btn remove"
                  v-if="step3_data.thickner.added"
                  @click="change_status('thickner')"
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
              <div class="item-content">
                <h1>Thickner</h1>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  :max="`${lotionstore.phases.oil_phase}`"
                  v-model="step3_data.thickner.amount"
                  v-if="step3_data.thickner.added"
                />
              </div>
            </div>
            <transition name="percent_warning">
              <div class="thickner-tip" v-if="oilphase_thicknertip">
                <p>Tip: Thickner should be between 1 - 3%</p>
              </div>
            </transition>

            <div class="total-container">
              <p>Total: {{ total_step3.oil_phase }}%</p>
            </div>
          </div>
        </div>
        <div class="phase-details">
          <transition name="percent_warning">
            <div
              class="percent_warning warning-1"
              v-if="
                total_step3.cooling_down_phase >
                lotionstore.phases.cooling_down_phase
              "
            >
              <p>
                Your Total Has Exceeded
                {{ lotionstore.phases.cooling_down_phase }}% !!
              </p>
            </div>
          </transition>
          <div class="phases">
            <h1>Cooling Down Phase</h1>
            <input
              type="number"
              class="phase-value"
              min="0"
              readonly
              v-model="lotionstore.phases.cooling_down_phase"
            />
          </div>
          <div class="phase-sub">
            <div class="percent-left-container">
              <p>You Have {{ total_left_step3.cooling_down_phase }}% Left</p>
            </div>
            <div class="sub-item">
              <div class="action-btn-container">
                <div class="action-btn"></div>
              </div>
              <div class="item-content">
                <h1>Preservative</h1>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  :max="`${lotionstore.phases.cooling_down_phase}`"
                  v-model="step3_data.preservatives.amount"
                  v-if="step3_data.preservatives.added"
                />
              </div>
            </div>
            <div class="sub-item">
              <div class="action-btn-container">
                <div
                  class="action-btn add"
                  v-if="!step3_data.essential_oil.added"
                  @click="change_status('essentialoil')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
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
                </div>
                <div
                  class="action-btn remove"
                  v-if="step3_data.essential_oil.added"
                  @click="change_status('essentialoil')"
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
              <div class="item-content">
                <h1>Essential Oils</h1>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  :max="`${lotionstore.phases.cooling_down_phase}`"
                  v-model="step3_data.essential_oil.amount"
                  v-if="step3_data.essential_oil.added"
                />
              </div>
            </div>
            <div class="sub-item">
              <div class="action-btn-container">
                <div
                  class="action-btn add"
                  v-if="!step3_data.fragrance_oil.added"
                  @click="change_status('fragranceoil')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
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
                </div>
                <div
                  class="action-btn remove"
                  v-if="step3_data.fragrance_oil.added"
                  @click="change_status('fragranceoil')"
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
              <div class="item-content">
                <h1>Fragrance Oils</h1>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  :max="`${lotionstore.phases.cooling_down_phase}`"
                  v-model="step3_data.fragrance_oil.amount"
                  v-if="step3_data.fragrance_oil.added"
                />
              </div>
            </div>
            <div class="sub-item">
              <div class="action-btn-container">
                <div
                  class="action-btn add"
                  v-if="!step3_data.actives.added"
                  @click="change_status('actives')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
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
                </div>
                <div
                  class="action-btn remove"
                  v-if="step3_data.actives.added"
                  @click="change_status('actives')"
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
              <div class="item-content">
                <h1>Actives</h1>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  :max="`${lotionstore.phases.cooling_down_phase}`"
                  v-model="step3_data.actives.amount"
                  v-if="step3_data.actives.added"
                />
              </div>
            </div>
            <div class="sub-item">
              <div class="action-btn-container">
                <div
                  class="action-btn add"
                  v-if="!step3_data.tocopherol.added"
                  @click="change_status('tocopherol')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
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
                </div>
                <div
                  class="action-btn remove"
                  v-if="step3_data.tocopherol.added"
                  @click="change_status('tocopherol')"
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
              <div class="item-content">
                <h1>Tocopherol/Vitamin E</h1>
                <input
                  type="number"
                  id="quantity"
                  min="0"
                  :max="`${lotionstore.phases.cooling_down_phase}`"
                  v-model="step3_data.tocopherol.amount"
                  v-if="step3_data.tocopherol.added"
                />
              </div>
            </div>
            <div class="total-container">
              <p>Total: {{ total_step3.cooling_down_phase }}%</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="btn-container">
      <button class="btn" @click="lotionstore.change_step('step2')">Back</button>
      <button class="btn" @click="next_step3('calc')">Calculate</button>
    </div>
  </section>
</template>
<style scoped>
/* Step 3 */
.phase-details {
  width: 100%;
  position: relative;
}
.phase-details .phases {
  border-radius: 10px 10px 0px 0px;
}
.phase-details .phase-value {
  cursor: default;
}
.phase-sub {
  /* border: 1px solid var(--color-primary); */
  margin: 0 20px;
  margin-top: 10px;
}
.sub-item {
  padding: 10px 15px;
  background: #fefffc;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.sub-item .action-btn-container {
  margin-right: 10px;
}
.sub-item .action-btn {
  width: 24px;
  height: 24px;
  background: var(--color-primary);
  box-shadow: 0 0 15px rgb(0 0 0 / 15%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.sub-item .item-content {
  width: 100%;
  display: flex;
  align-items: center;
}
.sub-item .item-content input {
  margin-left: auto;
}
.sub-item .action-btn:hover {
  transform: scale(1.06);
}
.sub-item .action-btn.add {
  color: var(--color-green);
}
.sub-item .action-btn.remove {
  color: var(--color-red);
}
.step-3 .phase-sub .total-container {
  margin-top: 25px;
}
.step-3 .phase-details .percent_warning {
  top: initial;
  bottom: 25px;
}
.sub-item:first-of-type {
  border-radius: 10px 10px 0px 0px;
}
.sub-item:last-of-type {
  border-radius: 0px 0px 10px 10px;
}

.step-3 .oil-phase .phase-sub .total-container {
  margin-top: 35px;
}
.step-3 .oil-phase .percent_warning.warning-1 {
  bottom: 40px;
}
.step-3 .oil-phase .percent_warning.warning-2 {
  bottom: 20px;
}
.step-3 .thickner-tip {
  color: #ef974b;
  font-size: 15px;
  font-weight: 500;
}
.step-3 .percent-left-container {
  margin-top: 10px;
}
</style>