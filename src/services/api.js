import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default {
    getGaleri() {
        return apiClient.get('/galeri');
    },

    getGreeting(){
        return apiClient.get('/greeting');
    },

    getPartners() {
        return apiClient.get('/partners');
    },

    getMember() {
        return apiClient.get('/member');
    }
}