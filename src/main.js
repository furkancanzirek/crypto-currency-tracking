import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router.config.js";
import './index.css'
const app = createApp(App);
app.use(router).mount("#app");
