import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Dashboard from '@/pages/Dashboard'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: resolve => require(['@/pages/Login'], resolve)
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/dashboard',
      leaf: true, // 只有一个节点
      menuShow: true,
      iconCls: 'iconfont icon-home', // 图标样式class
      children: [
        {path: '/dashboard', component: Dashboard, name: '首页', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '资产信息管理',
      menuShow: true,
      iconCls: 'iconfont icon-books',
      children: [
        {
          path: '/asset/idc',
          component: resolve => require(['@/pages/asset/IdcList'], resolve),
          name: '机房管理',
          menuShow: true
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/login')) {
    window.localStorage.removeItem('access-user')
    next()
  } else {
    let user = window.localStorage.getItem('access-user')
    if (!user) {
      next({path: '/login'})
    } else {
      next()
    }
  }
})

export default router
