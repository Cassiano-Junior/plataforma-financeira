import axios from "axios";
import { env } from "../../Config";


const request = axios.create({
    baseURL: env.API_URL,
});

const get = async function (endpoint, data, token = null) {
    return await request
        .get(endpoint, {
            params: data,
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        .then((success) => {
            return success;
        })
        .catch((err) => {
            return err.response;
        });
};
const post = async function (endpoint, data, token = null) {
    return await request
        .post(endpoint, data, {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        .then((success) => {
            return success;
        })
        .catch((err) => {
            return err.response;
        });
};
const put = async function (endpoint, data, token = null) {
    return await request
        .post(endpoint, data, {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
        .then((success) => {
            return success;
        })
        .catch((err) => {
            return err.response;
        });
};


const api = {
    get,
    post,
    put
};
export default api;
