import axios from 'axios';

const apiConfig = 'https://stub.od-tech.my/tech-assess/highlights';

const test_api = {
    getAPI: async () => {
        const url = apiConfig;

        return axios.get(url);
    }
}

export default test_api;