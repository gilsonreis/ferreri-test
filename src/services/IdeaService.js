import axios from '../config/axios';

export const getAll = () => axios.get("/idea");
export const getById = (id) => axios.get("/idea/" + id);
export const remove = (id) => axios.delete("/idea/" + id);

export const save = (Idea, id) => {
    let url = "/idea";

    if (typeof id !== "undefined") {
        url += "/" + id;
        return axios.put(url, Idea);
    }

    return axios.post(url, Idea);
};