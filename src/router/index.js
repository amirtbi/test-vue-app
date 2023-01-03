import { createWebHistory, createRouter} from "vue-router";

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

const routes = [{path:'/home',component:Home},{path:'/about',component:About}]


const router = new createRouter({
    history:createWebHistory(),
    routes
})


export default router