import {$authHost} from './index'

export let messageApi = {
    create : async (owner, text, chat) => {
        return $authHost.post('api/message', {owner, text, chat}).then(res => {
            return res.data
        }).catch(e => {
            return e.response.data
        })
    },
    getAll : async () => {
        return $authHost.get('api/message').then(res => {
            return res.data
        }).catch(e => {
            return e.response.data
        })
    },
    getOne : async (id) => {
        return $authHost.get(`api/message/${id}`).then(res => {
            return res.data
        }).catch(e => {
            return e.response.data
        })
    },
    getAllByUser : async (id) => {
        return $authHost.get(`api/message/user/${id}`).then(res => {
            return res.data
        }).catch(e => {
            return e.response.data
        })
    },
    getAllByChat : async (id) => {
        return $authHost.get(`api/message/chat/${id}`).then(res => {
            return res.data
        }).catch(e => {
            return e.response.data
        })
    },
    del :  async (id) => {
        return $authHost.delete(`api/message/${id}`).then(res => {
            return res.data
        }).catch(e => {
            return e.response.data
        })
    }
}

