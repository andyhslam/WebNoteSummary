import { createSSRApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRoute } from './router/route.js';

export function createApp() {
  const app = createSSRApp(App);
  const router = createRoute();
  app.use(router);
  return {
    app,
    router,
  };
}
