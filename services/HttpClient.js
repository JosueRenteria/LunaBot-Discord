import axios from 'axios';

export class HttpClient {
    async get(url) {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('HTTP Request Failed:', error.message);
            throw error;
        }
    }
}