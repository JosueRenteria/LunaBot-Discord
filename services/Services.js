const { HttpClient } = require("./HttpClient");

class ImagesService {
    constructor() {
        this.http = new HttpClient();
    }

    async getMemes() {
        try {
            const response = await this.http.get("https://meme-api.com/gimme");
            return response.url;
        } catch (error) {
            console.error('Error al obtener los memes:', error.message);
            throw error;
        }
    }
}

module.exports = ImagesService;