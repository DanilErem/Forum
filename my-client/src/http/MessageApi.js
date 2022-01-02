import {$authHost} from './index'

export const create = async (owner, text, chat) => {
    return $authHost.post('api/message', {owner, text, chat}).then(res => {
        return res.data
    }).catch(e => {
        return e.response.data
    })
}

export const getAll = async () => {
    return $authHost.get('api/message').then(res => {
        return res.data
    }).catch(e => {
        return e.response.data
    })
}

export const getOne = async (id) => {
    return $authHost.get(`api/message/${id}`).then(res => {
        return res.data
    }).catch(e => {
        return e.response.data
    })
}

export const getAllByUser = async (id) => {
    return $authHost.get(`api/message/user/${id}`).then(res => {
        return res.data
    }).catch(e => {
        return e.response.data
    })
}
export const getAllByChat = async (id) => {
    return $authHost.get(`api/message/chat/${id}`).then(res => {
        return res.data
    }).catch(e => {
        return e.response.data
    })
}

export const del = async (id) => {
    return $authHost.delete(`api/message/${id}`).then(res => {
        return res.data
    }).catch(e => {
        return e.response.data
    })
}

