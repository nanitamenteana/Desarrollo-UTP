import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Category from "../views/Category.vue"
import MariaHernandez from "../views/MariaHernandez.vue"
import JoseGomez from "../views/JoseGomez.vue"
import AndreaGonzalez from "../views/AndreaGonzalez.vue"
import KarlaFlorez from "../views/KarlaFlorez.vue"
import LuisHerrera from "../views/LuisHerrera.vue"
import EstebanReyes from "../views/EstebanReyes.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/:category',
    component: Category,
  },
  {
    path: '/mariahernandez',
    name: 'MariaHernandez',
    component: MariaHernandez
  },
  {
    path: '/josegomez',
    name: 'JoseGomez',
    component: JoseGomez
  },
  {
    path: '/andreagonzalez',
    name: 'AndreaGonzalez',
    component: AndreaGonzalez
  },
  {
    path: '/karlaflorez',
    name: 'KarlaFlorez',
    component: KarlaFlorez
  },
  {
    path: '/luisherrera',
    name: 'LuisHerrera',
    component: LuisHerrera
  },
  {
    path: '/estebanreyes',
    name: 'EstebanReyes',
    component: EstebanReyes
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router