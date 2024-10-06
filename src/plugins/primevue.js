import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

export const registerPrimeVue = (app) => {
  app.use(PrimeVue, {
    pt: Aura,
  });
};
