import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Detail from '@/pages/detail/Detail'
import GoodsList from '@/pages/goodsList/GoodsList'
import MyExchange from '@/pages/myExchange/MyExchange'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }, {
      path: '/list',
      name: 'GoodsList',
      component: GoodsList
    }, {
      path: '/exchange',
      name: 'MyExchange',
      component: MyExchange
    }
  ]
})
