
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'list', component: () => import('pages/IndexPage.vue') },
      { path: '/:id?', name: 'formList', component: () => import('pages/CreateList.vue') },
      { path: '/:id/activity', name: 'activities', component: () => import('pages/IndexActivities.vue') },
      { path: '/:id/activity/:activityId?', name: 'formActivities', component: () => import('pages/CreateActivity.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
