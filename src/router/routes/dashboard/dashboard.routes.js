import dashboard from "@/views/dashboard/dashboard.vue";
export default [
  {
    name: "dashboard",
    path: "/dashboard",
    components: {
      default: () => import("@/layout/dashboard/dashboard.vue"),
    },
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "",
        component: dashboard,

      },

    ],
  },
];
