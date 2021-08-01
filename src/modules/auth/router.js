import { AUTH, AUTH_SIGN_IN, AUTH_FORGOT_PASSWORD } from './constants/router.js';

const moduleRoute = {
  path: '/auth',
  component: () => import('@/layouts/Auth.vue'),
  name: AUTH,
  redirect: { name: AUTH_SIGN_IN },
  children: [
    {
      path: 'sign-in',
      name: AUTH_SIGN_IN,
      component: () => import('./views/SignIn.vue'),
    },
    {
      path: 'forgot-password',
      name: AUTH_FORGOT_PASSWORD,
      component: () => import('./views/ForgotPassword.vue'),
    },
  ],
};

export default (router) => {
  router.addRoute(moduleRoute);
};
