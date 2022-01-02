<template>
    <header>
        <nav>
            <router-link class="logo" to="/">Forum</router-link>
            <div class="links">
                <router-link to="/chats" :class="curRoute == 'Chats' ? 'active-link' : null">Chats</router-link>
                <router-link to="/mychats" :class="curRoute == 'MyChats' ? 'active-link' : null">My Chats</router-link>
            </div>
            <div v-if="isAuth" class="buttons">
                <div>{{ userName }}</div>
                <button @click="logout" >Logout</button>
            </div>
            <div v-else class="buttons">
                <router-link to="/login">
                    <button>Login</button>
                </router-link>
                <router-link to="/registration">
                    <button>Sign In</button>
                </router-link>
            </div>
        </nav>
    </header>
</template>

<script>
import UserStore from '@/store/UserStore.js'
export default {
    computed: {
        isAuth() {
            return UserStore.getters.isAuth
        },
        userName() {
            return UserStore.getters.user.email
        },
        curRoute() {
            return this.$route.name
        }
    },
    methods: {
        logout() {
            UserStore.commit('setUser', null)
            UserStore.commit('setIsAuth', false)
            localStorage.removeItem('token')
        }
    }
}
</script>

<style scoped>
    header {
        width: 100%;
        height: 70px;
        background: #f0f0f0;
        margin-bottom: 20px;
    }
    header nav {
        width: 70%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    header nav .logo {
        font-size: 28px;
        color: #303030;
    }
    header nav .links a {
        margin: 0 20px;
        border-radius: 5px;
        padding: 10px 15px;
        transition: .2s all ease;
    }
    header nav .links a:hover {
        background: #ffffff;
    }
    header nav .links a.active-link {
        background: #ffffff;
        font-weight: bold;
    }
    header nav .buttons {
        display: flex;
        align-items: center;
    }
    header nav .buttons a {
        margin: 0 5px;
    }
    header nav .buttons button {
        margin: 0 5px;
    }
</style>