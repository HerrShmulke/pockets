import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Modules
import authModule from '@/modules/auth';

// Utils
import { registerModules } from '@/utils/register-modules.js';

// Styles
import '@/assets/scss/index.scss';

registerModules({
  auth: authModule,
});

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
