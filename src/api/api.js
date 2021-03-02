import * as axios from 'axios';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'; 
 
let instance = axios.create( {

    withCredentials: true,
    headers: {
        "API-KEY": "7f5c3636-9998-425e-a521-fcef25d178b1"
    }

});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
        .then (response=> response.data);
    }, 

    unfollowUser(userId) {
        return instance.delete(baseUrl + `follow/${userId}`)
        .then (response=> response.data);
    },

    followUser(userId) {
        return instance.post(baseUrl + `follow/${userId}`)
        .then (response=> response.data);
    },

    getProfile(userId) {
        console.warn('obsolete method. please use profileAPI object')
        return profileAPI.getProfile(userId);
    }
}
 

export const profileAPI = {
    getProfile(userId) {
        return instance.get(baseUrl + `profile/${userId}`)
        .then (response=> response.data);
    }, 
    getStatus(userId) {
        return instance.get(baseUrl + `profile/status/${userId}`)
        .then (response=> response.data);
    },
    updateStatus(status) {
        return instance.put(baseUrl + `profile/status`, {status:status})
        .then (response=> response.data);
    }
}

export const authAPI = {
    authMe() {
        return instance.get(baseUrl + `auth/me`)
        .then (response=> response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post(baseUrl + 'auth/login', {email, password, rememberMe});
    },
    logout() {
        return instance.delete(baseUrl + 'auth/login');
    }

}