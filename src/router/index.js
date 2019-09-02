import Vue from 'vue'
import Router from 'vue-router'
//	引入文件封装所在的位置
import lazyRouter from '../libs/lazyRouter/lazyRouter';

// 页面路由
import Login from '@/page/Login'
import Home from '@/page/Home'
import Index from '@/page/Index'

lazyRouter.add('/', 'login', '登录页', Login);
lazyRouter.add('/home','home','首页',Home);
lazyRouter.add('/index','index','sous',Index)

//	将lazyRouter对象下面的routes暴露出去
Vue.use(Router);
export default new Router({
  routes: lazyRouter.routes
})
