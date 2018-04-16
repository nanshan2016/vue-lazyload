import VueRouter from 'vue-router';
import Home from '@/components/containers/home'
import JobList from '@/components/containers/joblist'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },

    {
      path: '/joblist',
      name: 'joblist',
      component: JobList
    }
  ]
})
