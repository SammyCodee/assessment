import axios from 'axios';

const apiConfig = 'https://stub.od-tech.my/tech-assess';

const header = { 

    Accept: 'application/json'
}

const test_api = {
    getAPI: async () => {
        const url = apiConfig + '/highlights';

        return axios.get(url);
    },

    login: async (userID, password) => {
        const url = apiConfig + '/login';

        const params = {
            userid: userID,
            password: password
        }
        return axios.post(url, params, header);
    }
}

export default test_api;