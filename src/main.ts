import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/router";
import "./sass/index.scss";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaEllipsisH } from "oh-vue-icons/icons/fa";
addIcons(FaChevronLeft, FaChevronRight, FaQuoteRight, FaEllipsisH);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router).mount("#app");
