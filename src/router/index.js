import Vue from 'vue'
import Router from 'vue-router'
//	引入文件封装所在的位置
// import lazyRouter from '../libs/lazyRouter/lazyRouter';

// 页面路由
import Login from '@/page/Login'
import Home from '@/page/Home'
import NewApply  from '@/page/proPage/newApply'
import HandleAndOver from '@/page/proPage/handleAndOver'
import ApplyOpen from '@/page/proPage/applyOpen'
import ApplyMembership  from '@/page/proPage/applyMembership'

import SubmintInfo  from '@/page/proPage/submintInfo'
import MembershipOk  from '@/page/proPage/membershipOk'
import GeneralStatement  from '@/page/proPage/generalStatement'
import SummaryShip  from '@/page/proPage/summaryShip'

import PriorityPerson  from '@/page/proPage/priorityPerson'
import SecondaryPerson  from '@/page/proPage/secondaryPerson'
import OrdinaryPerson  from '@/page/proPage/ordinaryPerson'

import CryPtogram  from '@/page/proPage/cryPtogram'
import AccountUnber  from '@/page/proPage/accountUnber'

import SynAnomaly from '@/page/asidePAge/synAnomaly'
import BalanceAnomaly from '@/page/asidePAge/balanceAnomaly'
import WaterAnomaly from '@/page/asidePAge/waterAnomaly'
import OptionByOne from '@/page/asidePAge/optionByOne'
import OptionByTwo from '@/page/asidePAge/optionByTwo'
import Jurisdiction from '@/page/asidePAge/jurisdiction'
import Staff from '@/page/asidePAge/Staff'



// lazyRouter.add('/', 'login', '登录页', Login);
// lazyRouter.add('/home','home','首页',Home);
// lazyRouter.add('/index','index','sous',Index)

//	将lazyRouter对象下面的routes暴露出去
Vue.use(Router);
// export default new Router({
//   routes: lazyRouter.routes
// })

export default new Router({
  routes: [{
      path: '/',
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
          path: 'newApply',
          name: 'newApply',
          component: NewApply
        },
        {
          path: 'handleAndOver',
          name: 'handleAndOver',
          component: HandleAndOver
        },
        {
          path: 'applyOpen',
          name: 'applyOpen',
          component: ApplyOpen
        },
        {
          path: 'applyMembership ',
          name: 'applyMembership ',
          component: ApplyMembership 
        },
        {
          path: 'submintInfo',
          name: 'submintInfo',
          component: SubmintInfo
        },
        {
          path: 'membershipOk',
          name: 'membershipOk',
          component: MembershipOk
        },
        {
          path: 'generalStatement',
          name: 'generalStatement',
          component: GeneralStatement
        },
        {
          path: 'summaryShip ',
          name: 'summaryShip ',
          component: SummaryShip 
        },

        {
          path: 'priorityPerson ',
          name: 'priorityPerson ',
          component: PriorityPerson 
        },
        {
          path: 'secondaryPerson',
          name: 'secondaryPerson',
          component:SecondaryPerson
        },
        {
          path: 'ordinaryPerson',
          name: 'ordinaryPerson',
          component: OrdinaryPerson
        },
        {
          path: 'cryPtogram',
          name: 'cryPtogram',
          component: CryPtogram
        },
        {
          path: 'accountUnber',
          name: 'accountUnber ',
          component: AccountUnber 
        },

        {
          path: 'synAnomaly ',
          name: 'synAnomaly ',
          component: SynAnomaly 
        },
        {
          path: 'waterAnomaly',
          name: 'waterAnomaly',
          component:WaterAnomaly
        },
        {
          path: 'balanceAnomaly',
          name: 'balanceAnomaly',
          component: BalanceAnomaly
        },
        {
          path: 'optionByOne',
          name: 'optionByOne',
          component: OptionByOne
        },
        {
          path: 'optionByTwo',
          name: 'optionByTwo ',
          component: OptionByTwo 
        },
        {
          path: 'staff',
          name: 'staff',
          component: Staff
        },
        {
          path: 'jurisdiction',
          name: 'jurisdiction ',
          component: Jurisdiction 
        }
        // {
        //   path: 'goods',
        //   name: 'Goods',
        //   component: Goods,
        //   redirect: {
        //     name: 'List'
        //   },
        //   children: [{
        //       path: 'list',
        //       name: 'List',
        //       component: List
        //     },
        //     {
        //       path: 'add',
        //       name: 'Add',
        //       component: Add
        //     }
        //   ]
        // }
      ]
    }
  ]
})
