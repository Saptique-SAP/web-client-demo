import PrimeVue from "primevue/config";
import Aura from "@/presets/aura";

export const registerPrimeVue = (app) => {
  app.use(PrimeVue, {
    unstyled: true,
    pt: Aura,
  });
};
