import { createRouter, createWebHistory } from 'vue-router';
import homePage from '../components/homePage.vue';
import LogIn from '../components/LogIn.vue';
import SignUp from '../components/SignUp.vue';
import SignUp2 from '../components/SignUp2.vue';
import feed from '../components/TheFeed.vue';
import forgot from '../components/PassWord1.vue';
import details from '../components/EntrProfile.vue';
import rate from '../components/reviewEntre.vue';
import notif from '../components/TheNotifications.vue';
import { getAuth, onAuthStateChanged} from "firebase/auth";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: homePage },
        { path: "/LogIn", component: LogIn },
        { path: "/SignUp", component: SignUp },
        { path: "/SignUp2", component: SignUp2 },
        { path: "/feed", component: feed ,
        meta:{
            requiresAuth: true
        }
    },
        { path: "/forgot", component: forgot },
        { path: "/details", component: details },
        { path: "/rate", component: rate},
        { path: "/notif", component: notif},
        
        
        
    ],
});
const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(getAuth(), user => {
            unsubscribe();
            resolve(user);
        }, reject);
    });
};
router.beforeEach(async(to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            next();
        } else {
            alert('You must be logged in to see this page');
            next('/LogIn');
        }
    } else {
        next();
    }
});
export default router;
