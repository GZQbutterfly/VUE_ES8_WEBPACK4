import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import {aa} from './pages/aa/aa.js';

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'home',
                component: resolve => resolve(aa)
                // render: h => App(h)
                // component: resolve => {
                //     require.ensure([], require => {
                //         resolve(require('../sys/notfound/notfound')['NotFound']);
                //     }, 'sys/system');
                // }
            },
            {
                path: '**',
                component: {
                    template: '<div>404</div>'
                }
            }
        ]
    })
}