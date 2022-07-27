<script setup lang="ts">
/*
Imports
*/
import { ref, reactive, watch, onMounted } from "vue";
import { lotionStore } from "@/stores/lotion";

/*
Use Lotion Store 
*/
const lotionstore = lotionStore();

onMounted(() => {
  lotionstore.calculate();
});

/*
Print Functionality
*/
const print = () => {
  window.print()
}
</script>

<template>
  <section class="steps result">
    <header>
      <h1>RESULTS</h1>
      <div class="sub-heading">
        <p>
          A Lotion, measured in Grams with Water Phase of
          {{ lotionstore.phases.water_phase }}%, Oil Phase of
          {{ lotionstore.phases.oil_phase }}% and Cooling Down Phase of
          {{ lotionstore.phases.cooling_down_phase }}%
        </p>
      </div>
    </header>
    <main class="print-container">
      <div class="phase water-phase">
        <div class="phase-content">
          <table>
            <thead>
              <tr>
                <th class="textalign-left title">Water Phase</th>
                <th class="amount">Amount</th>
                <th class="percent">%</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="phases-item"
                v-if="lotionstore.step3_data.distilled_water.added"
              >
                <td class="textalign-left title">Distilled Water</td>
                <td class="amount">
                  {{ lotionstore.step3_data.distilled_water.total }}
                  {{ lotionstore.unit }}
                </td>
                <td class="percent">
                  {{ lotionstore.step3_data.distilled_water.amount }}%
                </td>
              </tr>
              <tr
                class="phases-item"
                v-if="lotionstore.step3_data.hydrosols.added"
              >
                <td class="textalign-left title">Hydrosols</td>
                <td class="amount">
                  {{ lotionstore.step3_data.hydrosols.total }}
                  {{ lotionstore.unit }}
                </td>
                <td class="percent">
                  {{ lotionstore.step3_data.hydrosols.amount }}%
                </td>
              </tr>
              <tr
                class="phases-item"
                v-if="lotionstore.step3_data.aloe_juice.added"
              >
                <td class="textalign-left title">Aloe Juice</td>
                <td class="amount">
                  {{ lotionstore.step3_data.aloe_juice.total }}
                  {{ lotionstore.unit }}
                </td>
                <td class="percent">
                  {{ lotionstore.step3_data.aloe_juice.amount }}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="phase oil-phase">
        <div class="phase-content">
          <table>
            <thead>
              <tr>
                <th class="textalign-left title">Oil Phase</th>
                <th class="amount">Amount</th>
                <th class="percent">%</th>
              </tr>
            </thead>
            <tbody>
              <tr class="phases-item" v-if="lotionstore.step3_data.oils.added">
                <td class="textalign-left title">Oils</td>
                <td class="amount"></td>
                <td class="percent"></td>
              </tr>
              <tr
                class=""
                v-for="oil in lotionstore.step4_data.oils"
                :key="oil.id"
              >
                <td class="textalign-left title">{{ oil.product_Name }}</td>
                <td class="amount">{{ oil.total }} {{ lotionstore.unit }}</td>
                <td class="percent">{{ oil.amount }}%</td>
              </tr>
              <tr class="" v-if="lotionstore.step3_data.oils.added">
                <td class="textalign-left title">Total</td>
                <td class="amount">
                  {{ lotionstore.step3_data.oils.total }} {{ lotionstore.unit }}
                </td>
                <td class="percent">
                  {{ lotionstore.step3_data.oils.amount }}%
                </td>
              </tr>
              <tr
                class="phases-item"
                v-if="lotionstore.step3_data.butters.added"
              >
                <td class="textalign-left title">Butters</td>
                <td class="amount"></td>
                <td class="percent"></td>
              </tr>
              <tr
                class=""
                v-for="butter in lotionstore.step4_data.butters"
                :key="butter.id"
              >
                <td class="textalign-left title">{{ butter.product_Name }}</td>
                <td class="amount">
                  {{ butter.total }} {{ lotionstore.unit }}
                </td>
                <td class="percent">{{ butter.amount }}%</td>
              </tr>
              <tr class="" v-if="lotionstore.step3_data.butters.added">
                <td class="textalign-left title">Total</td>
                <td class="amount">
                  {{ lotionstore.step3_data.butters.total }}
                  {{ lotionstore.unit }}
                </td>
                <td class="percent">
                  {{ lotionstore.step3_data.butters.amount }}%
                </td>
              </tr>
              <tr
                class="phases-item"
                v-if="lotionstore.step3_data.emulsifier.added"
              >
                <td class="textalign-left title">Emulsifier</td>
                <td class="amount"></td>
                <td class="percent"></td>
              </tr>
              <tr
                class=""
                v-for="emulsifier in lotionstore.step4_data.emulsifier"
                :key="emulsifier.id"
              >
                <td class="textalign-left title">
                  {{ emulsifier.product_Name }}
                </td>
                <td class="amount">
                  {{ emulsifier.total }} {{ lotionstore.unit }}
                </td>
                <td class="percent">{{ emulsifier.amount }}%</td>
              </tr>
              <tr class="" v-if="lotionstore.step3_data.emulsifier.added">
                <td class="textalign-left title">Total</td>
                <td class="amount">
                  {{ lotionstore.step3_data.emulsifier.total }}
                  {{ lotionstore.unit }}
                </td>
                <td class="percent">
                  {{ lotionstore.step3_data.emulsifier.amount }}%
                </td>
              </tr>
              <tr
                class="phases-item"
                v-if="lotionstore.step3_data.thickner.added"
              >
                <td class="textalign-left title">Thickner</td>
                <td class="amount"></td>
                <td class="percent"></td>
              </tr>
              <tr
                class=""
                v-for="thickner in lotionstore.step4_data.thickner"
                :key="thickner.id"
              >
                <td class="textalign-left title">
                  {{ thickner.product_Name }}
                </td>
                <td class="amount">
                  {{ thickner.total }} {{ lotionstore.unit }}
                </td>
                <td class="percent">{{ thickner.amount }}%</td>
              </tr>
              <tr class="" v-if="lotionstore.step3_data.thickner.added">
                <td class="textalign-left title">Total</td>
                <td class="amount">
                  {{ lotionstore.step3_data.thickner.total }}
                  {{ lotionstore.unit }}
                </td>
                <td class="percent">
                  {{ lotionstore.step3_data.thickner.amount }}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="phase cooling-down-phase">
        <div class="phase-content">
          <table>
            <thead>
              <tr>
                <th class="textalign-left title">Cooling Down Phase</th>
                <th class="amount">Amount</th>
                <th class="percent">%</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="phases-item"
                v-if="lotionstore.step3_data.preservatives.added"
              >
                <td class="textalign-left title">Preservatives</td>
                <td class="amount"></td>
                <td class="percent"></td>
              </tr>
              <tr
                class=""
                v-for="preservative in lotionstore.step4_data.preservatives"
                :key="preservative.id"
              >
                <td class="textalign-left title">
                  {{ preservative.product_Name }}
                </td>
                <td class="amount">
                  {{ preservative.total }} {{ lotionstore.unit }}
                </td>
                <td class="percent">{{ preservative.amount }}%</td>
              </tr>
              <tr class="" v-if="lotionstore.step3_data.preservatives.added">
                <td class="textalign-left title">Total</td>
                <td class="amount">
                  {{ lotionstore.step3_data.preservatives.total }}
                  {{ lotionstore.unit }}
                </td>
                <td class="percent">
                  {{ lotionstore.step3_data.preservatives.amount }}%
                </td>
              </tr>
              <tr
                class="phases-item"
                v-if="lotionstore.step3_data.essential_oil.added"
              >
                <td class="textalign-left title">Essential Oil</td>
                <td class="amount"></td>
                <td class="percent"></td>
              </tr>
              <tr
                class=""
                v-for="eo in lotionstore.step4_data.essential_oil"
                :key="eo.id"
              >
                <td class="textalign-left title">{{ eo.product_Name }}</td>
                <td class="amount">{{ eo.total }} {{ lotionstore.unit }}</td>
                <td class="percent">{{ eo.amount }}%</td>
              </tr>
              <tr class="" v-if="lotionstore.step3_data.essential_oil.added">
                <td class="textalign-left title">Total</td>
                <td class="amount">
                  {{ lotionstore.step3_data.essential_oil.total }}
                  {{ lotionstore.unit }}
                </td>
                <td class="percent">
                  {{ lotionstore.step3_data.essential_oil.amount }}%
                </td>
              </tr>
              <tr
                class="phases-item"
                v-if="lotionstore.step3_data.fragrance_oil.added"
              >
                <td class="textalign-left title">Fragrance Oil</td>
                <td class="amount"></td>
                <td class="percent"></td>
              </tr>
              <tr
                class=""
                v-for="fo in lotionstore.step4_data.fragrance_oil"
                :key="fo.id"
              >
                <td class="textalign-left title">
                  {{ fo.product_Name }}
                </td>
                <td class="amount">{{ fo.total }} {{ lotionstore.unit }}</td>
                <td class="percent">{{ fo.amount }}%</td>
              </tr>
              <tr class="" v-if="lotionstore.step3_data.fragrance_oil.added">
                <td class="textalign-left title">Total</td>
                <td class="amount">
                  {{ lotionstore.step3_data.fragrance_oil.total }}
                  {{ lotionstore.unit }}
                </td>
                <td class="percent">
                  {{ lotionstore.step3_data.fragrance_oil.amount }}%
                </td>
              </tr>
              <tr
                class="phases-item"
                v-if="lotionstore.step3_data.actives.added"
              >
                <td class="textalign-left title">Actives</td>
                <td class="amount"></td>
                <td class="percent"></td>
              </tr>
              <tr
                class=""
                v-for="active in lotionstore.step4_data.actives"
                :key="active.id"
              >
                <td class="textalign-left title">
                  {{ active.product_Name }}
                </td>
                <td class="amount">
                  {{ active.total }} {{ lotionstore.unit }}
                </td>
                <td class="percent">{{ active.amount }}%</td>
              </tr>
              <tr class="" v-if="lotionstore.step3_data.actives.added">
                <td class="textalign-left title">Total</td>
                <td class="amount">
                  {{ lotionstore.step3_data.actives.total }}
                  {{ lotionstore.unit }}
                </td>
                <td class="percent">
                  {{ lotionstore.step3_data.actives.amount }}%
                </td>
              </tr>
              <tr
                class="phases-item"
                v-if="lotionstore.step3_data.tocopherol.added"
              >
                <td class="textalign-left title">Tocopherol/Vitamin E</td>
                <td class="amount">
                  {{ lotionstore.step3_data.tocopherol.total }}
                  {{ lotionstore.unit }}
                </td>
                <td class="percent">
                  {{ lotionstore.step3_data.tocopherol.amount }}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
    <div class="buttons-section">
      <div class="back-btn">
        Back To Calculator
      </div>
      <div class="print">
        <div class="print-btn" @click="print">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="22"
            height="22"
            fill="currentColor"
          >
            <path
              d="M448 192H64C28.65 192 0 220.7 0 256v96c0 17.67 14.33 32 32 32h32v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h32c17.67 0 32-14.33 32-32V256C512 220.7 483.3 192 448 192zM384 448H128v-96h256V448zM432 296c-13.25 0-24-10.75-24-24c0-13.27 10.75-24 24-24s24 10.73 24 24C456 285.3 445.3 296 432 296zM128 64h229.5L384 90.51V160h64V77.25c0-8.484-3.375-16.62-9.375-22.62l-45.25-45.25C387.4 3.375 379.2 0 370.8 0H96C78.34 0 64 14.33 64 32v128h64V64z"
            />
          </svg>
          <span>PRINT</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.phase {
  margin-bottom: 20px;
}
.phase-content {
  padding: 0px 10px;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  margin-top: 8px;
}
.phase table thead {
  background: #d8d8d8;
  line-height: 3;
}
.phases-item {
  background: var(--color-primary);
}
thead th {
  font-weight: 500;
  font-size: 17px;
  text-align: center;
}
td {
  font-weight: 400;
  font-size: 16px;
}
tbody td {
  text-align: center;
  padding: 16px;
}
.textalign-left {
  text-align: left;
  padding-left: 1em;
}
.title {
  width: 60%;
}
.amount {
  width: 25%;
}
.percent {
  width: 15%;
}

/* WATER PHASE */
.water-phase thead {
  background: #d8d8d8;
}

.back-btn {
  width: 90%;
  margin: 5px auto;
  text-align: center;
  /* height: 40px; */
  padding: 10px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid var(--color-green);
  border-radius: 6px;
}

.print {
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.print .print-btn {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.print span {
  font-weight: 600;
  font-size: 16px;
  margin-left: 8px;
}

@media print {
  /* Hide every other element */
  body * {
    visibility: hidden;
  }
  /* Showing Print container */
  .print-container,
  .print-container * {
    visibility: visible;
  }

  .print-container {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
