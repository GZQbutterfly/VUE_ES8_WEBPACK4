import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import {aa} from './pages/aa/aa';
import {bb} from './pages/bb/bb';

const isServer = process.env.VUE_ENV === 'server';


export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'home',
                component: resolve => resolve(aa)
            },
            {
                path: '/aa',
                name: 'aa',
                component: resolve => resolve(aa)
            },
            {
                path: '/bb',
                name: 'bb',
                component: resolve => {
                    console.log('vue server: ', isServer);
                    if(!isServer){
                        require.ensure([], require => {
                            resolve(require('./pages/bb/bb')['bb']);
                        }, 'sys/system');
                    }else{
                        resolve(bb);
                    }
                }
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