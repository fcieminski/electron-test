import Vue from "vue";
import Main from "./Main.vue";
import router from "./router";
import "./index.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(Main)
}).$mount("#app");
