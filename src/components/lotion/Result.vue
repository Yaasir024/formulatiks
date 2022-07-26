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
        <div class="phase-header">
          <div class="phases">
            <h1>Water Phase</h1>
          </div>
        </div>
        <div class="phase-content">
          <table>
            <thead>
              <tr>
                <th class="textalign-left title"></th>
                <th class="amount">Amount</th>
                <th class="percent">%</th>
              </tr>
            </thead>
            <tbody>
              <tr class="phases-item">
                <td class="textalign-left title">Distilled Water</td>
                <td class="amount">50G</td>
                <td class="percent">20%</td>
              </tr>
              <tr class="phases-item">
                <td class="textalign-left title">Hydrosols</td>
                <td class="amount">500G</td>
                <td class="percent">30%</td>
              </tr>
              <tr class="phases-item">
                <td class="textalign-left title">Aloe Juice</td>
                <td class="amount">50G</td>
                <td class="percent">20%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="phase oil-phase">
        <div class="phase-header">
          <div class="phases">
            <h1>Oil Phase</h1>
          </div>
        </div>
        <div class="phase-content">
          <table>
            <thead>
              <tr>
                <th class="textalign-left title"></th>
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
              <tr class="">
                <td class="textalign-left title">Argan Oil</td>
                <td class="amount">50G</td>
                <td class="percent">20%</td>
              </tr>
              <tr class="">
                <td class="textalign-left title">Calendular Oil</td>
                <td class="amount">50G</td>
                <td class="percent">20%</td>
              </tr>
              <tr class="">
                <td class="textalign-left title">Tweak Oil</td>
                <td class="amount">50G</td>
                <td class="percent">20%</td>
              </tr>
              <tr class="">
                <td class="textalign-left title">Total</td>
                <td class="amount">500G</td>
                <td class="percent">60%</td>
              </tr>
              <tr class="phases-item">
                <td class="textalign-left title">Butters</td>
                <td class="amount"></td>
                <td class="percent"></td>
              </tr>
              <tr class="">
                <td class="textalign-left title">Calendular Oil</td>
                <td class="amount">50G</td>
                <td class="percent">20%</td>
              </tr>
              <tr class="">
                <td class="textalign-left title">Tweak Oil</td>
                <td class="amount">50G</td>
                <td class="percent">20%</td>
              </tr>
              <tr class="">
                <td class="textalign-left title">Total</td>
                <td class="amount">500G</td>
                <td class="percent">60%</td>
              </tr>
              <tr class="phases-item">
                <td class="textalign-left title">Emulsifier</td>
                <td class="amount"></td>
                <td class="percent"></td>
              </tr>
              <tr class="">
                <td class="textalign-left title">Calendular Oil</td>
                <td class="amount">50G</td>
                <td class="percent">20%</td>
              </tr>
              <tr class="">
                <td class="textalign-left title">Tweak Oil</td>
                <td class="amount">50G</td>
                <td class="percent">20%</td>
              </tr>
              <tr class="">
                <td class="textalign-left title">Total</td>
                <td class="amount">500G</td>
                <td class="percent">60%</td>
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
