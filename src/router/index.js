import VueRouter from 'vue-router';
const Home = r => require.ensure([], () => r(require('@/modules/page1')),'page');
const JobList = r => require.ensure([], () => r(require('@/modules/page2')),'page');

export default new VueRouter({
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
