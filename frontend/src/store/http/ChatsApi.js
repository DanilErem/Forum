import {$authHost} from './index'

export const create = async (title, owner) => {
    return $authHost.post('api/chat', {owner, title}).then(res => {
        return res.data
    }).catch(e => {
        return e.response.data
    })
}

export const getAll = async () => {
    return $authHost.get('api/chat').then(res => {
        return res.data
    }).catch(e => {
        return e.response.data
    })
}

export const getOne = async (id) => {
    return $authHost.get(`api/chat/${id}`).then(res => {
        return res.data
    }).catch(e => {
        return e.response.data
    })
}

export const getAllByUser = async (id) => {
    return $authHost.get(`api/chat/user/${id}`).then(res => {
        return res.data
    }).catch(e => {
        return e.response.data
    })
}

export const del = async (id) => {
    return $authHost.delete(`api/chat/${id}`).then(res => {
        return res.data
    }).catch(e => {
        return e.response.data
    })
}


