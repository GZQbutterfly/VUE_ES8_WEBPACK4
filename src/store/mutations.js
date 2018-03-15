import Vue from 'vue';
export default {
    increment(state) {

    },
    SET_USER: (state, { id, user }) => {
        Vue.set(state.cache.users, id, user || false) /* false means user not found */
    }
}