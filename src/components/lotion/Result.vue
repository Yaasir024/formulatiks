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
</script>

<template>
  <section class="steps result">
    <header>
      <h1>RESULTS</h1>
      <div class="sub-heading">
        <p>
          A Lotion, measured in Grams with Water Phase of 50%, Oil Phase of 30%
          and Cooling Down Phase of 20%
        </p>
      </div>
    </header>
    <main>
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
              <tr class="phases-item">
                <td class="textalign-left title">Distilled Water</td>
                <td class="amount">
                  {{ lotionstore.step3_data.distilled_water.total }} {{ lotionstore.unit }}
                </td>
                <td class="percent">
                  {{ lotionstore.step3_data.distilled_water.amount }}%
                </td>
              </tr>
              <tr class="phases-item">
                <td class="textalign-left title">Hydrosols</td>
                <td class="amount">
                  {{ lotionstore.step3_data.hydrosols.total }} {{ lotionstore.unit }}
                </td>
                <td class="percent">
                  {{ lotionstore.step3_data.hydrosols.amount }}%
                </td>
              </tr>
              <tr class="phases-item">
                <td class="textalign-left title">Aloe Juice</td>
                <td class="amount">
                  {{ lotionstore.step3_data.aloe_juice.total }} {{ lotionstore.unit }}
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
              <tr class="phases-item">
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
              <tr
                class=""
              >
                <td class="textalign-left title">Total</td>
                <td class="amount">{{ lotionstore.step3_data.oils.total }} {{ lotionstore.unit }}</td>
                <td class="percent">{{ lotionstore.step3_data.oils.amount }}%</td>
              </tr>
              <tr class="phases-item">
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
                <td class="amount">{{ butter.total }} {{ lotionstore.unit }}</td>
                <td class="percent">{{ butter.amount }}%</td>
              </tr>
              <tr
                class=""
              >
                <td class="textalign-left title">Total</td>
                <td class="amount">{{ lotionstore.step3_data.butters.total }} {{ lotionstore.unit }}</td>
                <td class="percent">{{ lotionstore.step3_data.butters.amount }}%</td>
              </tr>
              <tr class="phases-item">
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
                <td class="amount">{{ emulsifier.total }}G</td>
                <td class="percent">{{ emulsifier.amount }}%</td>
              </tr>
              <tr
                class=""
              >
                <td class="textalign-left title">Total</td>
                <td class="amount">{{ lotionstore.step3_data.emulsifier.total }} {{ lotionstore.unit }}</td>
                <td class="percent">{{ lotionstore.step3_data.emulsifier.amount }}%</td>
              </tr>
              <tr class="phases-item">
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
                <td class="amount">{{ thickner.total }}G</td>
                <td class="percent">{{ thickner.amount }}%</td>
              </tr>
              <tr
                class=""
              >
                <td class="textalign-left title">Total</td>
                <td class="amount">{{ lotionstore.step3_data.thickner.total }} {{ lotionstore.unit }}</td>
                <td class="percent">{{ lotionstore.step3_data.thickner.amount }}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="phase cooling-down-phase">
        <div class="phase-header">
          <div class="phases">
            <h1>Cooling Down Phase</h1>
          </div>
        </div>
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
              <tr class="phases-item">
                <td class="textalign-left title">Preservatives</td>
                <td class="amount"></td>
                <td class="percent"></td>
              </tr>
              <tr
                class=""
                v-for="preservative in lotionstore.step4_data.preservatives"
                :key="preservative.id"
              >
                <td class="textalign-left title">{{ preservative.product_Name }}</td>
                <td class="amount">{{ preservative.total }}G</td>
                <td class="percent">{{ preservative.amount }}%</td>
              </tr>
              <tr
                class=""
              >
                <td class="textalign-left title">Total</td>
                <td class="amount">{{ lotionstore.step3_data.preservatives.total }} {{ lotionstore.unit }}</td>
                <td class="percent">{{ lotionstore.step3_data.preservatives.amount }}%</td>
              </tr>
              <tr class="phases-item">
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
                <td class="amount">{{ eo.total }}G</td>
                <td class="percent">{{ eo.amount }}%</td>
              </tr>
              <tr
                class=""
              >
                <td class="textalign-left title">Total</td>
                <td class="amount">{{ lotionstore.step3_data.essential_oil.total }} {{ lotionstore.unit }}</td>
                <td class="percent">{{ lotionstore.step3_data.essential_oil.amount }}%</td>
              </tr>
              <tr class="phases-item">
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
                <td class="amount">{{ fo.total }}G</td>
                <td class="percent">{{ fo.amount }}%</td>
              </tr>
              <tr
                class=""
              >
                <td class="textalign-left title">Total</td>
                <td class="amount">{{ lotionstore.step3_data.fragrance_oil.total }} {{ lotionstore.unit }}</td>
                <td class="percent">{{ lotionstore.step3_data.fragrance_oil.amount }}%</td>
              </tr>
              <tr class="phases-item">
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
                <td class="amount">{{ active.total }}G</td>
                <td class="percent">{{ active.amount }}%</td>
              </tr>
              <tr
                class=""
              >
                <td class="textalign-left title">Total</td>
                <td class="amount">{{ lotionstore.step3_data.actives.total }} {{ lotionstore.unit }}</td>
                <td class="percent">{{ lotionstore.step3_data.actives.amount }}%</td>
              </tr>
              <tr class="phases-item">
                <td class="textalign-left title">Tocopherol</td>
                <td class="amount">
                  {{ lotionstore.step3_data.tocopherol.total }}G
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
  width: 20%;
}
.percent {
  width: 20%;
}

/* WATER PHASE */
.water-phase thead {
  background: #d8d8d8;
}
.phases-item {
  font-weight: 500;
  font-size: 17px;
}
</style>
