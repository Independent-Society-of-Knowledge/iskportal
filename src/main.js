import "./assets/styling/main.css"
import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, useRouter} from 'vue-router'
import {use} from "marked";
import {router} from "@/routes/router.ts";

createApp(App)
    .use(router)
    .mount('#app')

