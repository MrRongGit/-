import Vue from 'vue'
import Router from 'vue-router'
import ShowBlogs from './components/Show-Blogs.vue'
import AddBlog from './components/Add-Blog.vue'
import SingleBlog from './components/single-Blog.vue'
import EditBlog from './components/Edit-Blog.vue'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'home',
      component: ShowBlogs
    },
    {
      path: '/add',
      // name: 'home',
      component: AddBlog
    },
    {
      path:"/blog/:id",
      component:SingleBlog
    },
    {
      path:"/edit/:id",
      component: EditBlog
    }
  ]
})
