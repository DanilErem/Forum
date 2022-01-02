<template>
  <section>
    <h1>Login</h1>
    <input v-model="email"  type="email">
    <input v-model="password"  type="password">
    <span class="err-str">{{ error }}</span>
    <div class="btn-group">
        <button @click="loginBtn">Login</button>
        <router-link to="/registration">Register</router-link>
    </div>
  </section>
</template>

<script>
import {login} from '@/http/UserApi.js'
import router from '../router/index.js'
import UserStore from '@/store/UserStore.js'
export default {
    data: () => {
        return {
            email: "", 
            password: "",
            error: ""
        }
    },
    methods: {
        loginBtn() {
            if (!this.email || !this.password) {
                return
            }
            login(this.email, this.password).then(res => {
                if (res.errors) {
                    this.error = res.message
                }
                else {
                    UserStore.commit('setUser', res)
                    UserStore.commit('setIsAuth', true)
                    this.error = ""
                    this.password = ""
                    this.email = ""
                    router.push({ name: 'Home' })
                }
            })
            
        }
    }
}
</script>

<style scoped>
    section {
        width: 40%;
        display: flex;
        flex-direction: column;
    }
    section input {
        margin-bottom: 10px;
    }
    section h1 {
        padding-bottom: 10px;
        border-bottom: 2px solid #303030;
        margin-bottom: 10px;
    }
    section .btn-group {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    section .btn-group a {
        font-size: 14px;
    }
    section .err-str {
        font-size: 12px;
        color: red;
        display: flex;
        align-content: center;
        margin-bottom: 10px;
    }
</style>