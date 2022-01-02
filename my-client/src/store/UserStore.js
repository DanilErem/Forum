import {createStore} from 'vuex'

const UserStore = createStore({
    state() {
        return {
            user: null,
            isAuth: false
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setIsAuth(state, flag) {
            state.isAuth = flag
        }
    },
    getters: {
        user(state) {
            return state.user
        },
        isAuth(state) {
            return state.isAuth
        }
    }
})

export default UserStore