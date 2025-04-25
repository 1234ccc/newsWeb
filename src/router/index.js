import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Africa from '../views/Africa.vue'
import Asia from '../views/Asia.vue'
import Article from '../views/article.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/Africa', component: Africa },
  { path: '/Asia', component: Asia },
  { path: '/article/:id', component: Article }
]

const router = createRouter({
  history: createWebHashHistory('/newsWeb/'), 
  routes
})

export default router
