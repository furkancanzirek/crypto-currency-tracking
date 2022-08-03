import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes/routes";
import { getAuth } from "firebase/auth";
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth.currentUser||localStorage.getItem('authKey')) {

      next();
    } else {
  
     
      next("/");
    }
  } else {
    
    next();
  }
});
export default router;
