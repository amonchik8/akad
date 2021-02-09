import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TheContainer from "@/components/TheContainer.vue";
import TheSubscribe from "@/components/TheSubscribe.vue";
import TheFooter from "@/components/TheFooter.vue";
import Header from "@/components/common/Header.vue";

Vue.component("TheContainer", TheContainer);
Vue.component("TheSubscribe", TheSubscribe);
Vue.component("TheFooter", TheFooter);
Vue.component("Header", Header);

Vue.config.ignoredElements = [/^ion-/];
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
