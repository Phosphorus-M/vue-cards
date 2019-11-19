import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import verContacto from '@/components/verContacto'
import Contacto from '../components/contact-logic'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/verContacto',
      name: 'verContacto',
        component: verContacto,
        props: (route) => {
            console.log("DIOS:", route);
            return { buttons: true, contact: route.params.contact  }
        }
    }
  ]
});

router.beforeEach((to, from, next) => {
    console.log("#sadasd", to.path, to.fullPath, to.params, typeof to.params.contact == "undefined");
    console.log(typeof to.params == "undefined" && to.path == '/verContacto')
    if (typeof to.params.contact == "undefined" && to.path == '/verContacto') next('Home');
    next();
});

export default router;