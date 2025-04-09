import { createRouter, createWebHistory } from 'vue-router'
import Layoutviews from '@/views/layout/layIndex.vue'
import IndexViews from '@/views/index/index.vue'
import ClazzViews from '@/views/clazz/index.vue'
import StuViews from '@/views/stu/index.vue'
import TodoList from '@/component/TodoList.vue'
import DeptViews from '@/views/dept/deptIndex.vue'
import EmpViews from '@/views/emp/empIndex.vue'
import EmpReportViews from '@/views/report/emp/index.vue'
import StuReportViews from '@/views/report/stu/index.vue'
import LogViews from '@/views/log/index.vue'
import LoginViews from '@/views/login/index.vue'

const routes = [
    { path: '/',
      name: '',
      component: Layoutviews,
      redirect: '/index',
      children: [
        { path: '/index', name: 'index', component: IndexViews },
        { path: '/clazz', name: 'clazz', component: ClazzViews },
        { path: '/stu', name: 'stu', component: StuViews },
        { path: '/todo', name: 'todo', component: TodoList },
        { path: '/dept', name: 'dept', component: DeptViews },
        { path: '/emp', name: 'emp', component: EmpViews },
        { path: '/empReport', name: 'empReport', component: EmpReportViews },
        { path: '/stuReport', name: 'stuReport', component: StuReportViews },
        { path: '/log', name: 'log', component: LogViews },
      ]
    },
    {path: '/login', name: 'login', component: LoginViews}
]
const router = createRouter({
  // 创建基于HTML5 history模式的路由实例
  history: createWebHistory(),
  routes,
})
export default router
