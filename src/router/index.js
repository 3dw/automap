import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Ans from '@/components/Ans'
import Short from '@/components/Short'
import Contact from '@/components/Contact'
import Inner from '@/components/Inner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/ans/:id',
      name: 'Ans',
      component: Ans
    },
    {
      path: '/short',
      name: 'Short',
      component: Short
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/inner/:step',
      name: 'Inner',
      component: Inner
    }
  ]
})
