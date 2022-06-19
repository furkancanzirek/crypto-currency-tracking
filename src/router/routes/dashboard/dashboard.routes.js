import dashboard from '@/views/dashboard/dashboard.vue';
export default[
    {
        name:"dashboard",
        path:"/",
        components:{
            default:()=> import("@/layout/dashboard/dashboard.vue")
        },
        children:[{
            path:"/",
            component:dashboard
        }]
    }
]