import { createApp } from "vue";
import { initializeApp } from "firebase/app";
import App from "./App.vue";
import router from "@/router/router.config.js";
import './index.css'
import { createPinia } from 'pinia'
import firebaseConfig from "./services/firebase";
const pinia = createPinia()

initializeApp(firebaseConfig)
const app = createApp(App);
app.use(router).use(pinia).mount("#app");
