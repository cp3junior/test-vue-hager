import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueScrollactive from "vue-scrollactive";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";

Vue.config.productionTip = false;

// integration de bootstrap
Vue.use(BootstrapVue);

// utilisation de vue scroll active pour scroller dans les sections du menu
Vue.use(VueScrollactive);

// integration de font awesome
library.add(faFacebookF);
library.add(faTwitter);
library.add(faLinkedinIn);
library.add(faPlay);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  render: h => h(App)
}).$mount("#app");
