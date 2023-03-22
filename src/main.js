import * as CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';
import eruda from 'eruda';

console.log(`CrComLib.IsCrestronTouchscreen(): ${CrComLib.isCrestronTouchscreen()}`);

eruda.init();

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
