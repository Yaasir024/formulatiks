<script setup lang="ts">
/*
Imports
*/
import { ref, reactive, watch } from "vue";

const activeAccordion = ref<number[]>([]);

const questions = ref([
  {
    title: "Who Created Formulatics? ",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, tellus volutpat id adipiscing felis lobortis hac vitae dui. Vitae pellentesque tincidunt ornare elit ut ante vel pulvinar mauris.",
  },
  {
    title: "Is Formulatics Calculator free?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, tellus volutpat id adipiscing felis lobortis hac vitae dui. Vitae pellentesque tincidunt ornare elit ut ante vel pulvinar mauris.",
  },
  {
    title: "How much is Formulatics Pro?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, tellus volutpat id adipiscing felis lobortis hac vitae dui. Vitae pellentesque tincidunt ornare elit ut ante vel pulvinar mauris.",
  },
  {
    title: "Is it billed monthly or yearly?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, tellus volutpat id adipiscing felis lobortis hac vitae dui. Vitae pellentesque tincidunt ornare elit ut ante vel pulvinar mauris.",
  },
]);

const openAccord = (index: any) => {
  const currentIndex = activeAccordion.value.findIndex((ind) => ind === index);
  if (activeAccordion.value.includes(index)) {
    activeAccordion.value.splice(currentIndex, 1);
  } else {
    activeAccordion.value.splice(currentIndex, 1, index);
  }
};
</script>

<template>
  <div class="accordion">
    <div
      class="accordion-item"
      v-for="(question, index) in questions"
      :key="`question-${index}`"
    >
      <div class="question" @click="openAccord(index)">
        <h3>{{question.title}}</h3>
        <svg
        class="arrow"
        :class="{ active: activeAccordion.includes(index) }"
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 1.5L8 8.5L1 1.5"
            stroke="#2F2D37"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <p class="answer" :class="{ collapsed: activeAccordion.includes(index) }">
        {{question.answer}}
      </p>
    </div>
  </div>
</template>

<style scoped>
.accordion {
  margin-top: 50px;
}
.accordion-item {
  padding: 1.5rem 0;
  border-bottom: 1px solid rgb(234 234 234);
}
.question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.question h3 {
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  letter-spacing: 0.01em;
}
.answer {
  margin-top: 10px;
  text-align: left;
  letter-spacing: 0.01em;
}
.answer {
  display: none;
  transition: all 0.4s ease-in-out;
}
.answer.collapsed {
  display: block;
  transition: all 0.4s ease-in-out;
}
.arrow {
  transform: rotate(0deg);
  transition: all 0.5s ease;
}
.arrow.active {
  transform: rotate(180deg);
}
</style>
