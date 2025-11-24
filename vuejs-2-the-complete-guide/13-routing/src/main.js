import { createApp } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
    // router options go here
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' }, // redirect root to /teams
        // { path: '/teams', component: TeamsList, alias: '/'}, // alias makes /teams also accessible via /
        // { path: '/teams', component: TeamsList},

        // { name: 'teams', path: '/teams', component: TeamsList, children: [
        //     { name: 'team-members', path: ':teamId', component: TeamMembers, props: true}, // dynamic segment  example: /teams/t2
        // ]},

        { 
            name: 'teams',
            path: '/teams',
            components: {
                default: TeamsList,
                footer: TeamsFooter,
            },
            children: [
                {
                    name: 'team-members',
                    path: ':teamId',
                    component: TeamMembers,
                    props: true
                }, // dynamic segment  example: /teams/t2
            ]
    },

        { path: '/users', components: {
            default: UsersList,
            footer: UsersFooter,
        }},
        // { path: '/teams/new'}, // static route always before dynamic
        // { path: '/teams/:teamId', component: TeamMembers, props: true}, // dynamic segment 
        // define your routes here
        // { path: '/:notFound(.*)', redirect: '/teams' }, // catch all redirect
        { path: '/:notFound(.*)', component: NotFound }, // catch all redirect
    ],
    // default classes below for active element. 
    // active is added to every class even nested / teams / someone
    linkActiveClass: 'active',
    // exact is only added to that one specific route
    linkExactActiveClass: 'router-link-exact-active',
    scrollBehavior(to, from, savedPosition) {
        // console.log(to, from, savedPosition);
        if (savedPosition) {
            return savedPosition;
        }
        return {
            left: 0,
            top: 0,
        }
    }
})

router.beforeEach(function(to, from, next) {
    console.log('Global beforeEach');
    console.log(to, from);
    // if (to.name === 'team-members') {
    //     next();
    // } else {
    //     next( {name: 'team-members', params: { teamId: 't2' } } );
    // }
    next();
});

const app = createApp(App)
app.use(router);

app.mount('#app');