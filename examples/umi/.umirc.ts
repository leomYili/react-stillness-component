import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          exact: false,
          path: '/home',
          component: '@/pages/home',
          stillness: true,
          routes: [
            {
              path: '/home/a',
              component: '@/pages/a',
              stillness: true,
            },
          ],
        },
        { path: '/about', component: '@/pages/about', stillness: true },
        { path: '/list', component: '@/pages/list' },
      ],
    },
  ],
  stillness: {},
});
