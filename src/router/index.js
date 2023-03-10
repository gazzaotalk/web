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
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/RegisterView.vue')
    },
    {
      path: '/friends-add',
      name: 'firends-add',
      component: () => import('../pages/FriendsAddView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../pages/ProfileView.vue')
    },
    {
      path: '/profile-edit',
      name: 'profile-edit',
      component: () => import('../pages/ProfileEditView.vue')
    }
  ]
})

export default router
