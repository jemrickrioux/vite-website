import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import { loadFonts } from "./plugins/webfontloader";
import store from "./store";

loadFonts();

let myApp = createApp(App);
myApp.config.globalProperties.window = window;

myApp.use(store).use(router).use(vuetify).mount("#app");
