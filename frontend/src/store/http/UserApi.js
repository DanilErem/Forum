import {$authHost, $host} from './index'
import jwt_decode from 'jwt-decode'

export const registration = async (email, password) => {
    return $host.post('api/user/registration', {email, password}).then(res => {
        localStorage.setItem('token', res.data)
        return jwt_decode(res.data)
    }).catch(e => {
        return e.response.data
    })
}

export const getOne = async (id) => {
    return $host.get(`api/user/${id}`).then(res => {
        return res.data
    }).catch(e => {
        return e.response.data
    })
}

export const login = async (email, password) => {
<<<<<<< HEAD
    return $host.post('api/user/login', {email, password}).then(res => {
        localStorage.setItem('token', res.data)
        return jwt_decode(res.data)
    }).catch(e => {
        return e.response.data
    })
=======

    const data = await $host.post('api/user/login', {email, password});
    localStorage.setItem('token', data.data);
    return jwt_decode(data.data);
>>>>>>> eb95ae6fba069a2b49b3fbc6f7a0f6211361b9fd
}

export const check = async () => {
    return $authHost.get('api/user/check').then(res => {
        localStorage.setItem('token', res.data)
        return jwt_decode(res.data)
    }).catch(e => {
        return e.response.data
    })
}
