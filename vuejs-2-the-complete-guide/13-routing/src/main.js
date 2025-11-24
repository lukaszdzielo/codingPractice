import { createApp } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
    // router options go here
    history: createWebHistory(),
    routes: [
        { path: '/teams', component: TeamsList},
        { path: '/users', component: UsersList},
        // { path: '/teams/new'}, // static route always before dynamic
        { path: '/teams/:teamId', component: TeamMembers, props: true}, // dynamic segment 
        // define your routes here
    ],
    // default classes below for active element. 
    // active is added to every class even nested / teams / someone
    linkActiveClass: 'active',
    // exact is only added to that one specific route
    linkExactActiveClass: 'router-link-exact-active',
})

const app = createApp(App)
app.use(router);

app.mount('#app');