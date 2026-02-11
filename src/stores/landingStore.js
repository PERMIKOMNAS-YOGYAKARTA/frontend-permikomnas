import { defineStore} from 'pinia';
import api from '@/services/api';

export const useLandingStore = defineStore('landing', {
    state: () => ({
        galeri: [],
        coordinator: [],
        articles: [],
        partners: [],
        members: [],
        isLoading: false,
        isLoaded: false,
    }),

    actions: {
        async fetchAllHomeData() {
            if (this.isLoaded) {
                return;
            }

            this.isLoading = true;
            try {
                const [galeriRes, greetingRes, partnersRes, memberRes] = await Promise.all([
                    api.getGaleri(),
                    api.getGreeting(),
                    api.getPartners(),
                    api.getMember(),
                ]);

                this.galeri = galeriRes.data.data;
                this.coordinator = greetingRes.data.data;
                this.partners = partnersRes.data.data;
                this.members = memberRes.data.data;

                this.isLoaded = true;
            } catch (error) {
                console.error('Error fetching home data:', error);
            } finally {
                this.isLoading = false;
            }
        }
    }
})