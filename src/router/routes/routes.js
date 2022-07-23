import dashboardRoutes from "./dashboard/dashboard.routes";
import authRoutes from "./auth/auth.routes";

export default [
    ...authRoutes,
    ...dashboardRoutes
]