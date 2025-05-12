const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'login', name: 'Login Page', component: () => import('pages/LoginPage.vue') },
      { path: 'signup', name: 'Sign Up Page', component: () => import('pages/SignUp.vue') },
      { path: 'detail/:id', name: 'Detail Page', component: () => import('pages/DetailPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
