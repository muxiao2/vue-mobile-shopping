import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/tabbar/Home.vue'
import Member from '@/components/tabbar/Member.vue'
import ShoppingCart from '@/components/tabbar/ShoppingCart.vue'
import Search from '@/components/tabbar/Search.vue'

import NewsList from '@/components/news/NewsList.vue'
import NewsInfo from '@/components/news/NewsInfo.vue'

import PhotoList from '@/components/photos/PhotoList.vue'
import PhotoInfo from '@/components/photos/PhotoInfo.vue'

import GoodsList from '@/components/goods/GoodsList.vue'
import GoodsInfo from '@/components/goods/GoodsInfo.vue'

import GoodsDescription from '@/components/goods/GoodsDescription.vue'
import GoodsComment from '@/components/goods/GoodsComment.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // 重定向
      redirect:'/home'
    },
    {
      path:'/home',
      name:'Home',
      component: Home
    },
    {
      path:'/Member',
      name:'Member',
      component: Member
    },
    {
      path:'/ShoppingCart',
      name:'ShoppingCart',
      component: ShoppingCart
    },
    {
      path:'/Search',
      name:'Search',
      component: Search
    },
    {
      path:'/home/newslist',
      name:'NewsList',
      component: NewsList
    },
    {
      path:'/home/newsInfo/:id',
      name:'NewsInfo',
      component: NewsInfo
    },
    {
      path:'/home/photoList',
      name:'PhotoList',
      component: PhotoList
    },
    {
      path:'/home/photoInfo/:id',
      name:'PhotoInfo',
      component: PhotoInfo
    },
    {
      path:'/home/goodsList',
      name:'GoodsList',
      component: GoodsList
    },
    {
      path:'/home/goodsInfo/:id',
      name:'GoodsInfo',
      component: GoodsInfo
    },
    {
      path:'/home/goodsDescription/:id',
      name:'GoodsDescription',
      component: GoodsDescription
    },
    {
      path:'/home/goodsComment/:id',
      name:'GoodsComment',
      component: GoodsComment
    },
  ],
  mode: 'history',
  //点击生成点亮样式
  linkActiveClass: 'mui-active',
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
