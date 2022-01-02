import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ChatsPage from '@/views/ChatsPage.vue'
import MyChatsPage from '@/views/MyChatsPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegistrationPage from '@/views/RegistrationPage.vue'
import ChatPage from '@/views/ChatPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/chats',
    name: 'Chats',
    component: ChatsPage
  },
  {
    path: '/mychats',
    name: 'MyChats',
    component: MyChatsPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/registration',
    name: 'Registration',
    component: RegistrationPage
  },
  {
    path: '/chat/:id',
    props: true,
    component: ChatPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
