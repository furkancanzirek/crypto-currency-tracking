import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes/routes";
import { getAuth } from "firebase/auth";
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (getAuth.currentUser || localStorage.getItem("authKey")) {
//       console.log("burada 1");
//       next();
//     } else {
//       console.log("burada 2");
//       next("/");
//     }
//     console.log("burada 3");
//   } else {
//     console.log("burada 4");
//     if (getAuth.currentUser || localStorage.getItem("authKey")) {
//       console.log("burada 5");
//       if (to.path=="/") {
//         console.log("burada 6");
//         next("/dashboard");
//       }
//     }
//     else{
//       next();
//     }
   
   
//   }
// });
export default router;
