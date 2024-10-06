import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { registerPrimeVue } from "@/plugins/primevue.js";

const app = createApp(App);

registerPrimeVue(app);

app.mount("#app");
