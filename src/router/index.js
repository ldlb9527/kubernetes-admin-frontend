import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import Xterm from "../components/Xterm";
import Main from "../components/Main";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {path:'/cluster/list',name:'clusterList',component: () => import('../components/cluster/List')},
        {path:'/cluster/add',name:'addCluster',component: () => import('../components/cluster/Add')},
        {path:'/clusterinfo',name:'clusterinfo',component: () => import('../components/clusterinfo/Index1')},
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
