import { AUTH, AUTH_SIGNIN } from './constants/router.js';

const moduleRoute = {
  path: '/auth',
  component: () => import('@/layouts/Auth.vue'),
  name: AUTH,
  redirect: { name: 'Auth.Signin' },
  children: [
    {
      path: 'signin',
      name: AUTH_SIGNIN,
      component: () => import('./views/SignIn.vue'),
    },
  ],
};

export default (router) => {
  router.addRoute(moduleRoute);
};
