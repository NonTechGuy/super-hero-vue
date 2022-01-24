import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Notifications from '@kyvg/vue3-notification';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).use(VueAxios, axios)
  .use(Notifications)
  .mount('#app');
