

import { fetchUser } from '../api';

export default {
    GET_USER({ commit, state }, id){
        let users = state.cache.users[id];
        return users? Promise.resolve(users): fetchUser(id).then(user => {commit('SET_USER', { id, user }); return user;})
    }
}