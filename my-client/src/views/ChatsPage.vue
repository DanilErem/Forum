<template>
  <div class="main">
    <div class="chats">
      <section v-for="chat in chats" :key="chat._id" @click="selectChat(chat._id)">
        <h1>{{ chat.title }}</h1>
        <p>{{ chat.owner.email }}</p>
      </section>
    </div>
    <button v-show="isAuth" @click="openModal">Add Chat</button>
    <Modal v-show="showModal" @onClose="closeModal" >
      <section class="modal">
        <h1>Add Chat</h1>
        <input v-model="chatTitle"  type="text">
        <span class="err-str">{{ error }}</span>
        <button @click="createChat">Add</button>
      </section>
    </Modal>
  </div>
</template>

<script>
import {getAll, create} from '@/http/ChatsApi.js'
import Modal from '../components/Modal.vue'
import UserStore from '@/store/UserStore.js'
import router from '../router'
export default {
  components: {
    Modal
  },
  data() {
    return {
      chats: [],
      showModal: false,
      error: "",
      chatTitle: ""
    }
  },
  methods: {
    openModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    selectChat(id) {
      router.push(`/chat/${id}`)
    },
    createChat() {
      create(this.chatTitle, UserStore.getters.user.id).then(res => {
        if (res.errors) {
          this.error = res.message
        }
        else {
          this.chatTitle = ""
          this.closeModal()
        }
        this.$forceUpdate()
      })
    }
  },
  mounted() {
    this.$forceUpdate()
  },
  updated() {
    getAll().then(res => {
      if (res.errors) {
        console.log(res)
      }
      else {
        this.chats = res
      }
    })
  },
  computed: {
    isAuth() {
        return UserStore.getters.isAuth
    }
  }
}
</script>

<style scoped>
  div.main {
    width: 60%;
  }
  div.main div.chats section {
    margin-bottom: 10px;
  }
  div.main > button {
    width: 100%;
  }
  section.modal {
      width: 100%;
      display: flex;
      flex-direction: column;
  }
  section.modal input {
      margin-bottom: 10px;
  }
  section.modal h1 {
      padding-bottom: 10px;
      border-bottom: 2px solid #303030;
      margin-bottom: 10px;
  }
  section.modal .btn-group {
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  section.modal .btn-group a {

      font-size: 14px;
  }
  section.modal .err-str {
      font-size: 12px;
      color: red;
      display: flex;
      align-content: center;
      margin-bottom: 10px;
  }
</style>
