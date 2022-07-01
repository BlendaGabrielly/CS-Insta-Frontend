import PostInsta from '@/view/FeedInsta.vue';
import LoginInsta from '@/view/LoginInsta.vue';
import VueRouter from 'vue-router';


const rotas = [
    {
        path: '/', 
        name: 'Login',
        component: LoginInsta,

    },
    {
        path: '/post', 
        name: 'post',
        component:PostInsta,

    }
];

const router = new VueRouter({routes:rotas});


export default router;
