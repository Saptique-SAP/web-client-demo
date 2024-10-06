import PrimeVue from "primevue/config";

export const registerPrimeVue = (app) => {
  app.use(PrimeVue, {
    unstyled: true,
  });
};
