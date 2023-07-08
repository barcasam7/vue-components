import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/router";
import "./sass/index.scss";

createApp(App).use(router).mount("#app");
