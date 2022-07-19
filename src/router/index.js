import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import Xterm from "../components/Xterm";
import Main from "../components/Main";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {path:'/home',name:'home',component: () => import('../components/home/Index')},
        {path:'/user',name:'user',component: () => import('../components/user/Index')}
      ]
    },
    {
      path: '/xterm',
      name: 'Xterm',
      component: Xterm
    }
  ]
})
