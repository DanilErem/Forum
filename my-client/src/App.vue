<template>
  <Navbar />
  <router-view class="view"/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import {check} from '@/http/UserApi.js'
import UserStore from '@/store/UserStore.js'
export default {
  components: {
    Navbar
  },
  mounted() {
    check().then(res => {
      if (res.errors) {
        console.log(res.message)
        UserStore.commit('setIsAuth', false)
        UserStore.commit('setUser', null)
      }
      else {
        UserStore.commit('setUser', res)
        UserStore.commit('setIsAuth', true)              
      }
    })
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    outline: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    list-style: none;
    text-decoration: none;
    color: #303030;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }
  .view {
    margin: 0 auto;
  }
  button {
    padding: 5px 10px;
    border-radius: 5px;
    border: 2px solid #505050;
    background: #ffffff;
    outline: none;
    transition: .2s outline ease;
  }
  button:hover {
    outline: solid 3px #909090;
  }
  button:active {
    outline: solid 3px transparent;
    box-shadow: 0 0 3px black inset;
  }
  section {
    background: #f0f0f0;
    border-radius: 5px;
    padding: 10px;
  }
  input {
    padding: 5px 10px;
    width: 100%;
    border-radius: 5px;
    border: 2px solid #505050;
    background: #ffffff;
    outline: none;
    transition: .2s all ease;
  }
  input:hover {
    outline: solid 3px #909090;
  }
  input:focus {
    box-shadow: 0 2px 3px #a4a4a4;
    outline: solid 3px transparent;
  }
</style>
