import { defineStore } from "pinia";

export const lotionStore = defineStore({
  id: "lotion",
  state: () => ({
    loading: false,
    toast: false,
    toast_message: "",
    current_step: "step2",
    total_quantity: 5000,
    unit: 'g',
    phases: {
      water_phase: 0,
      oil_phase: 0,
      cooling_down_phase: 0,
    },
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
    step4_data: {
      oils: [] as any,
      butters: [] as any,
      emulsifier: [] as any,
      thickner: [] as any,
      preservatives: [] as any,
      essential_oil: [] as any,
      fragrance_oil: [] as any,
      actives: [] as any,
    },
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    change_step(step: any) {
      this.loading = true;
      setTimeout(
        () => ((this.loading = false), (this.current_step = step)),
        3000
      );
    },
    next_step2(step: any, phases: any) {
      this.phases.water_phase = phases.water_phase;
      this.phases.oil_phase = phases.oil_phase;
      this.phases.cooling_down_phase = phases.cooling_down_phase;
      console.log(phases);
      this.change_step(step);
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
      this.change_step("step4");
    },
    next_step4(data: any) {
      this.step4_data.oils = data.oils;
      this.step4_data.butters = data.butters;
      this.step4_data.emulsifier = data.emulsifier;
      this.step4_data.thickner = data.thickner;
      this.step4_data.preservatives = data.preservatives;
      this.step4_data.essential_oil = data.essential_oil;
      this.step4_data.fragrance_oil = data.fragrance_oil;
      this.step4_data.actives = data.actives;
      console.log(data);
      this.change_step("result");
    },

    calculate() {
      this.step3_data.distilled_water.total =
        ((this.step3_data.distilled_water.amount / 100) * this.total_quantity).toFixed(2);
      this.step3_data.hydrosols.total =
        ((this.step3_data.hydrosols.amount / 100) * this.total_quantity).toFixed(2);
      this.step3_data.aloe_juice.total =
        ((this.step3_data.aloe_juice.amount / 100) * this.total_quantity).toFixed(2);
      this.step3_data.oils.total =
        ((this.step3_data.oils.amount / 100) * this.total_quantity).toFixed(2);
      this.step3_data.butters.total =
        ((this.step3_data.butters.amount / 100) * this.total_quantity).toFixed(2);
      this.step3_data.emulsifier.total =
        ((this.step3_data.emulsifier.amount / 100) * this.total_quantity).toFixed(2);
      this.step3_data.thickner.total =
        ((this.step3_data.thickner.amount / 100) * this.total_quantity).toFixed(2);
      this.step3_data.preservatives.total =
        ((this.step3_data.preservatives.amount / 100) * this.total_quantity).toFixed(2);
      this.step3_data.essential_oil.total =
        ((this.step3_data.essential_oil.amount / 100) * this.total_quantity).toFixed(2);
      this.step3_data.fragrance_oil.total =
        ((this.step3_data.fragrance_oil.amount / 100) * this.total_quantity).toFixed(2);
      this.step3_data.actives.total =
        ((this.step3_data.actives.amount / 100) * this.total_quantity).toFixed(2);
      this.step3_data.tocopherol.total =
        ((this.step3_data.tocopherol.amount / 100) * this.total_quantity).toFixed(2);

      //STEP 4 DATA
      //OILS
      this.step4_data.oils.forEach((oil:any) => {
        oil.total = ((oil.amount / 100) * this.total_quantity).toFixed(2);
      });

      //BUTTERS
      this.step4_data.butters.forEach((butter:any) => {
        butter.total = ((butter.amount / 100) * this.total_quantity).toFixed(2);
      });

      //EMULSIFIER
      this.step4_data.emulsifier.forEach((emulsifier:any) => {
        emulsifier.total = ((emulsifier.amount / 100) * this.total_quantity).toFixed(2);
      });

      //THICKNER
      this.step4_data.thickner.forEach((thickner:any) => {
        thickner.total = ((thickner.amount / 100) * this.total_quantity).toFixed(2);
      });


      //PRESERVATIVES
      this.step4_data.preservatives.forEach((preservative:any) => {
        preservative.total = ((preservative.amount / 100) * this.total_quantity).toFixed(2);
      });


      //ESSENTIAL OIL
      this.step4_data.essential_oil.forEach((eo:any) => {
        eo.total = ((eo.amount / 100) * this.total_quantity).toFixed(2);
      });

      //FRAGRANCE OIL
      this.step4_data.fragrance_oil.forEach((fo:any) => {
        fo.total = ((fo.amount / 100) * this.total_quantity).toFixed(2);
      });


      //ACTIVES
      this.step4_data.actives.forEach((active:any) => {
        active.total = ((active.amount / 100) * this.total_quantity).toFixed(2);
      });

      console.log(this.step3_data, this.step4_data)
    },
  },
});
