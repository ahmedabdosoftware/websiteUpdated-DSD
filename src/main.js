import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "../src/scss/main.scss";
// Pinia
import { createPinia } from 'pinia';

// use Pinia
const pinia = createPinia();

// plugins

// FontAwesomeIcon
import FontAwesomeIcon from './plugins/fontawesome';

// Create app instance
const app = createApp(App);

// Register FontAwesomeIcon component
app.component('font-awesome-icon', FontAwesomeIcon);

// Use store, Pinia, and router
app.use(store);
app.use(pinia);
app.use(router);

// Mount the app
app.mount('#app');
