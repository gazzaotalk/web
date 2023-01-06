import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main/',
      name: 'main',
      component: () => import('../pages/main/main.vue')
    },
    {
      path: '/rooms_add',
      name: 'rooms_add',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/RoomsAddView.vue')
    },
    {
      path: '/room',
      name: 'room',
      component: () => import('../pages/RoomView.vue')
    }
  ]
})

export default router
