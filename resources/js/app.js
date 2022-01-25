/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';

import VueRouter from 'vue-router'

import store from "./store";

import CKEditor from 'ckeditor4-vue';

Vue.use(CKEditor);


Vue.use(VueRouter);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//storage/*.key

Vue.component('navbar', require('./components/Navbar.vue').default);
Vue.component('btn-component', require('./components/Btn').default);
Vue.component('deleteuser-component', require('./components/DeleteUser').default);
Vue.component('comp1', require('./components/Comp1').default);
Vue.component('comp2', require('./components/Comp2').default);
Vue.component('comp3', require('./components/Comp3').default);
Vue.component('comp4', require('./components/Comp4').default);
Vue.component('comp5', require('./components/Comp5').default);
Vue.component('comp6', require('./components/Comp6').default);
Vue.component('comp7', require('./components/Comp7').default);
Vue.component('comp8', require('./components/Comp8').default);
Vue.component('sidebar', require('./components/Sidebar').default);
Vue.component('footer-component', require('./components/Footer').default);
Vue.component('post-component', require('./components/Post').default);
Vue.component('spinner', require('./components/Loader').default);
Vue.component('notification-danger', require('./components/NotificationD').default);
Vue.component('notification-warning', require('./components/NotificationW').default);
Vue.component('notification-success', require('./components/NotificationS').default);
//Vue.component('all-questions', require('./components/All-Questions').default);

import routes from './routes';

const router =  new VueRouter(routes)

//Navigation guards here 

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!store.getters.loggedIn) {
        next({
          path: '/login',
        })
      } else {
        next()
      }
    } else {
      next() // make sure to always call next()!
    }
  })

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAdmin)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!store.getters.getRole) {
        next({
          path: '/Admin-Login',
        })
      } else {
        next()
      }
    } else {
      next() // make sure to always call next()!
    }
  })  


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const app = new Vue({
    el: '#app',
    router,
    store,
});


