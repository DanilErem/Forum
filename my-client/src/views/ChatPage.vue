<template>
    <div class="main">
        <section>
            <h1>{{ chat.title }}</h1>
            <p>{{ chat.owner.email }}</p>
        </section>
        <div v-if="messages.length > 0">
            <section class="message-form" v-for="message in messages" :key="message._id">
                <p>{{ message.text }}</p>
                <h5>{{ message.owner.email }}</h5>
            </section>
        </div>
        <div v-if="isAuth" class="group">
            <input v-model="message" type="text" />
            <button @click="sendMessage">Send</button>
        </div>
    </div>
</template>

<script>
import {getOne} from '@/http/ChatsApi.js'
import {getAllByChat, create} from '@/http/MessageApi.js'
import UserStore from '@/store/UserStore.js'
export default {
    props: [
        'id'
    ],
    computed: {
        isAuth() {
            return UserStore.getters.isAuth
        }
    },
    data() {
        return {
            message: "",
            chat: {
                title: "",
                owner: {
                    email: ""
                }
            },
            messages: []
        }
    },
    methods: {
        sendMessage() {
            create(UserStore.getters.user.id, this.message, this.id).then(res => {
                if (res.errors) {
                    console.log(res)
                }
                else {
                    this.messages = res
                    console.log(this.messages)
                }
            })
            this.$forceUpdate()
        }
    },
    mounted() {
        getOne(this.id).then(res => {
            if (res.errors) {
                console.log(res)
            }
            else {
                this.chat = res
                console.log(this.chat)
            }
        })
    },
    updated() {
        getAllByChat(this.id).then(res => {
            if (res.errors) {
                console.log(res)
            }
            else {
                this.messages = res
            }
        })
    }
}
</script>

<style scoped>
    div.main {
        width: 60%;
    }
    .group {
        display: flex;
        margin-top: 20px;
    }
    .group input {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
    }
    .group button {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
    }
    .message-form {
        margin-bottom: 10px;
    }
</style>>
