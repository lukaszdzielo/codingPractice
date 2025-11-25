import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

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
            meta: { needsAuth: true },
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

        { 
            path: '/users', 
            components: {
                default: UsersList,
                footer: UsersFooter,
            },
            beforeEnter(to, from, next) {
                console.log('Users beforeEnter');
                console.log(to, from);
                next();
            }

        },
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
    if (to.meta.needsAuth) {
        console.log('Needs auth!');
        next();
    } else {
        next();
    }
    // if (to.name === 'team-members') {
    //     next();
    // } else {
    //     next( {name: 'team-members', params: { teamId: 't2' } } );
    // }
    next();
});

router.afterEach(function(to, from) {
    // sending analytics data
    console.log('Global afterEach');
    console.log(to, from);
} );

export default router;