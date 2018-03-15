import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

import mutations from './mutations';
import actions from './actions';

const store = new Vuex.Store({
    modules: {

    },
    state: {
        cache:{
            aa: {},
            users: {aa:54},
        }
    },
    mutations,
    actions,
});


export default store;
