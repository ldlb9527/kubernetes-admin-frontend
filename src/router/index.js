import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import Xterm from "../components/Xterm";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/xterm',
      name: 'Xterm',
      component: Xterm
    }
  ]
})
