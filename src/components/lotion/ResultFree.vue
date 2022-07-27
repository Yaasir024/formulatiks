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

const phases_total = reactive({
  water_phase: 0,
  oil_phase: 0,
  cooling_down_phase: 0,
});

onMounted(() => {
  lotionstore.calculate_free();
  phases_total.water_phase = parseFloat(
    (
      (lotionstore.phases.water_phase / 100) *
      lotionstore.total_quantity
    ).toFixed(2)
  );
  phases_total.oil_phase = parseFloat(
    ((lotionstore.phases.oil_phase / 100) * lotionstore.total_quantity).toFixed(
      2
    )
  );
  phases_total.cooling_down_phase = parseFloat(
    (
      (lotionstore.phases.cooling_down_phase / 100) *
      lotionstore.total_quantity
    ).toFixed(2)
  );
});
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
              <tr class="phases-item total">
                <td class="textalign-left title">Total</td>
                <td class="amount">
                  {{ phases_total.water_phase }}
                  {{ lotionstore.unit }}
                </td>
                <td class="percent">{{ lotionstore.phases.water_phase }}%</td>
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
                <td class="amount">
                  {{ lotionstore.step3_data.thickner.total }}
                  {{ lotionstore.unit }}
                </td>
                <td class="percent">
                  {{ lotionstore.step3_data.thickner.amount }}%
                </td>
              </tr>
              <tr class="phases-item total">
                <td class="textalign-left title">Total</td>
                <td class="amount">
                  {{ phases_total.oil_phase }}
                  {{ lotionstore.unit }}
                </td>
                <td class="percent">{{ lotionstore.phases.oil_phase }}%</td>
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
                <td class="amount">
                  {{ lotionstore.step3_data.essential_oil.total }}
                  {{ lotionstore.unit }}
                </td>
                <td class="percent">
                  {{ lotionstore.step3_data.preservatives.amount }}%
                </td>
              </tr>
              <tr
                class="phases-item"
                v-if="lotionstore.step3_data.fragrance_oil.added"
              >
                <td class="textalign-left title">Fragrance Oil</td>
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
              <tr class="phases-item total">
                <td class="textalign-left title">Total</td>
                <td class="amount">
                  {{ phases_total.cooling_down_phase }}
                  {{ lotionstore.unit }}
                </td>
                <td class="percent">
                  {{ lotionstore.phases.cooling_down_phase }}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
    <div class="buttons-section">
      <div class="back-btn">Back To Calculator</div>
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
.phases-item.total {
    border-top: 1px solid #ccc;
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
</style>
