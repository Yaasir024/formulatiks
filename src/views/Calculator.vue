<template>
  <section class="calculator-section">
    <header>
      <h1>Calculators</h1>
      <hr />
    </header>
    <ul class="calculator-links">
      <li class="calc-link">LOTION calculator</li>
      <li class="calc-link">CREAM</li>
    </ul>
  </section>
</template>

<style scoped>
.calculator-section {
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 20px;
}
.calculator-section header h1 {
  font-size: 36px;
  font-weight: 700;
}
.calculator-section header hr {
  height: 2px;
  border: 0;
  background-color: #ccc;
  margin: 12px 0 24px;
  padding: 0;
}
.calculator-links {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0 15px;
}
.calc-link {
  height: 40px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.1px;
  /* border-bottom: 1px solid var(--color-green); */
  border-bottom: 2px solid #ccc;
  text-transform: uppercase;
  /* background: var(--color-green); */
}
</style>
