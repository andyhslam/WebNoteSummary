import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from 'vue-router';

const pages = import.meta.glob('../pages/*.vue');
console.log('pages', pages);

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\.\/pages(.*)\.vue$/)[1].toLowerCase();
  return {
    path: name === '/home' ? '/' : name,
    component: pages[path], // 等于 () => import('../pages/*.vue')
  };
});

export function createRoute() {
  return createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
  });
}
