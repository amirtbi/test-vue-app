import { createWebHistory, createRouter} from "vue-router";

import Home from '../pages/Home.vue'


const routes = [{path:'/home',component:Home}]


const router = new createRouter({
    history:createWebHistory(),
    routes
})


export default router