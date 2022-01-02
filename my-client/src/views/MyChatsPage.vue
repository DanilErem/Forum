<template>
  <div class="main">
      <section v-for="chat in chats" :key="chat._id">
        <h1>{{ chat.title }}</h1>
        <button @click="deleteChat(chat._id)">Delet</button>
      </section>
  </div>
</template>

<script>
import {getAllByUser, del} from '@/http/ChatsApi.js'
import UserStore from '@/store/UserStore.js'
import router from '../router/index.js'
export default {
  data() {
    return {
      chats: [],
    }
  },
  methods: {
    deleteChat(id) {
      del(id).then(res => {
        if (res.errors) {
          console.log(res)
        }
        this.$forceUpdate()
      })
    }
  },
  computed: {
    user() {
        return UserStore.getters.user
    },
    isAuth() {
        return UserStore.getters.isAuth
    }
  },
  mounted() {
    this.$forceUpdate()
  },
  updated() {
    if (!this.isAuth) {
        router.push('/login')
        return
    }
    getAllByUser(this.user.id).then(res => {
      if (res.errors) {
        console.log(res)
      }
      else {
        this.chats = res
      }
    })
  }
}
</script>

<style scoped>
  div.main {
    width: 60%;
  }
  div.main section {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
    align-items: center;
  }

</style>
