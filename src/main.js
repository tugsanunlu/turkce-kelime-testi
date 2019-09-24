import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck, faTimes, faExclamationTriangle, faKeyboard, faArrowUp, faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Quiz from './Quiz.vue';

library.add(faGithub, faCheck, faTimes, faExclamationTriangle, faKeyboard, faArrowUp, faArrowDown);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Quiz),
}).$mount('#app');
