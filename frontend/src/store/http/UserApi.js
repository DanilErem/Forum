import {$authHost, $host} from './index';
import jwt_decode from 'jwt-decode';

export const registration = async (email, password) => {
    const data = await $host.post('api/user/registration', {email, password});
    localStorage.setItem('token', data.data);
    return jwt_decode(data.data);
}

export const login = async (email, password) => {
    const data = await $host.post('api/user/login', {email, password});
    localStorage.setItem('token', data.data);
    return jwt_decode(data.data);
}

export const check = async () => {
    const data = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.data);
    return jwt_decode(data.data);
}