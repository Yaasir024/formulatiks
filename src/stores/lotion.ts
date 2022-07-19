import { defineStore } from "pinia";

export const lotionStore = defineStore({
  id: "lotion",
  state: () => ({
    loading: false,
    toast: false,
    toast_message: "step2",
    current_step: "step1",
    phases: {
      water_phase: 0,
      oil_phase: 0,
      cooling_down_phase: 0,
    },
    step3_data: {},
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    change_step(step: any) {
      this.loading = true;
      setTimeout(() => ((this.loading = false), this.current_step = step ), 3000);
      
    },
    next_step2(step: any, phases: any) {
      this.phases.water_phase = phases.water_phase;
      this.phases.oil_phase = phases.oil_phase;
      this.phases.cooling_down_phase = phases.cooling_down_phase;
      console.log(phases);
      this.change_step(step)
    },
    next_step3(step3_data: any) {
      this.step3_data = step3_data;
      console.log(this.step3_data);
    },
  },
});
