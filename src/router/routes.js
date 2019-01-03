
// 采用异步按需加载组件模式
const HelloWorld = () => import('@/components/HelloWorld')
const Login = () => import('@/views/login/index.vue')
const BindInfo = () => import('@/views/login/BindInfo.vue')

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    meta: {keepAlive: true},
    component: HelloWorld
  },
  {
    path: '/login',
    name: 'Login',
    meta: {keepAlive: true},
    component: Login
  },
  {
    path: '/bindInfo',
    name: 'BindInfo',
    meta: {keepAlive: true},
    component: BindInfo
  }
]

export default routes
