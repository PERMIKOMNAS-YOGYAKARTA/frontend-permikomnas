import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

const useMock = import.meta.env.VITE_USE_MOCKS === 'true';
const sleep = (ms = 1500) => new Promise(resolve => setTimeout(resolve, ms));

export default {
    async getGaleri() {
        if (useMock) {
            await sleep();
            return await apiClient.get('/mock/galeri.json');
        }
        return await apiClient.get('/galeri');
    },

    async getGreeting(){
        if (useMock) {
            await sleep();
            return await apiClient.get('/mock/greeting.json');
        }
        return apiClient.get('/greeting');
    },

    async getPartners() {
        if (useMock) {
            await sleep();
            return await apiClient.get('/mock/partners.json');
        }
        return apiClient.get('/partners');
    },

    async getMember() {
        if (useMock) {
            await sleep();
            return await apiClient.get('/mock/members.json');
        }
        return apiClient.get('/member');
    }
}