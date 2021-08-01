import { AUTH, AUTH_SIGNIN, FORGOT_PASSWORD } from './constants/router.js';

const moduleRoute = {
  path: '/auth',
  component: () => import('@/layouts/Auth.vue'),
  name: AUTH,
  redirect: { name: AUTH_SIGNIN },
  children: [
    {
      path: 'signin',
      name: AUTH_SIGNIN,
      component: () => import('./views/SignIn.vue'),
    },
    {
      path: 'forgot-password',
      name: FORGOT_PASSWORD,
      component: () => import('./views/ForgotPassword.vue'),
    },
  ],
};

export default (router) => {
  router.addRoute(moduleRoute);
};
