import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes/routes";
import { getAuth } from "firebase/auth";
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
    console.log(JSON.parse(localStorage.getItem('userData')));
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth.currentUser||localStorage.getItem('authKey')) {
      console.log("geçti");
      next();
    } else {
      console.log("iki");
     
      next("/");
    }
  } else {
    console.log("asdfasdfasdf");
    next();
  }
});
export default router;
