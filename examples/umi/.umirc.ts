import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/modal', component: '@/pages/modal' },
    { path: '/second', component: '@/pages/second' },
  ],
});
