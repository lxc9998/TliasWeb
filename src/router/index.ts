import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '@/component/TodoList.vue'
import Layout from '@/layout/index.vue'

const router = createRouter({
  // 创建基于HTML5 history模式的路由实例
  history: createWebHistory(import.meta.env.BASE_URL), // 使用项目基础路径作为路由的基础路径
  routes: [
    { path: '/todo', name: 'todo', component: TodoList },
    { path: '/', name: 'layout', component: Layout }
  ]
})
export default router
