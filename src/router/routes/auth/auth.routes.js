import login from "@/views/auth/login.vue";
import signup from "@/views/auth/signup.vue";
export default [
  {
    name: "auth",
    path: "/",
    components: {
      default: () => import("@/layout/auth/auth.vue"),
    },
    children: [
      {
        path: "/login",
        component: login,
      },
      {
        path: "/signup",
        component: signup,
      },
    ],
  },
];
