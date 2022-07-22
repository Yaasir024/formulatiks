import { defineStore } from "pinia";

export const lotionStore = defineStore({
  id: "lotion",
  state: () => ({
    loading: false,
    toast: false,
    toast_message: "",
    current_step: "step2",
    phases: {
      water_phase: 0,
      oil_phase: 0,
      cooling_down_phase: 0,
    },
    // step3_data: {
    //     oils: {
    //         amount: 20
    //     }
    // },
    step3_data: {
      distilled_water: {} as any,
      hydrosols: {} as any,
      aloe_juice: {} as any,
      oils: {} as any,
      butters: {} as any,
      emulsifier: {} as any,
      thickner: {} as any,
      preservatives: {} as any,
      essential_oil: {} as any,
      fragrance_oil: {} as any,
      actives: {} as any,
      tocopherol: {} as any,
    },
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
      this.step3_data.distilled_water = step3_data.distilled_water;
      this.step3_data.hydrosols = step3_data.hydrosols;
      this.step3_data.aloe_juice = step3_data.aloe_juice;
      this.step3_data.oils = step3_data.oils;
      this.step3_data.butters = step3_data.butters;
      this.step3_data.emulsifier = step3_data.emulsifier;
      this.step3_data.thickner = step3_data.thickner;
      this.step3_data.preservatives = step3_data.preservatives;
      this.step3_data.essential_oil = step3_data.essential_oil;
      this.step3_data.fragrance_oil = step3_data.fragrance_oil;
      this.step3_data.actives = step3_data.actives;
      this.step3_data.tocopherol = step3_data.tocopherol;
      console.log(this.step3_data);
      this.change_step('step4')
    },
  },
});
