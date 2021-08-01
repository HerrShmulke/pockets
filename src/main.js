// Styles
import '@/assets/scss/index.scss';

// node_modules
import 'focus-visible';
import { createApp } from 'vue';

// Local
import App from './App.vue';
import router from './router';
import store from './store';

// Modules
import authModule from '@/modules/auth';

// Utils
import { registerModules } from '@/utils/register-modules.js';

registerModules({
  auth: authModule,
});

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
