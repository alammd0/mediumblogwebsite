import axios from "axios";
import { BackendUrl } from "../../../components/auth/BackendUrl";


export const getAllBlogs = async (token: string) => {
    try {

        const response = await axios.get(`${BackendUrl}/api/v1/blog/all-post`, {
            headers: {
                Authorization: `${token}`,
            }
        });

        console.log("Fetched Blogs:", response.data);

        return response.data;
    } catch (err) {
        console.error("Failed to fetch blogs:", err);
        throw err;
    }
};

export const getBlogById = async (token: string, id: Number) => {
    try {

        const response = await axios.get(`${BackendUrl}/api/v1/blog/single-post/${id}`, {
            headers: {
                Authorization: `${token}`,
            }
        });

        console.log("Fetched Blogs:", response.data);

        return response.data;
    } catch (err) {
        console.error("Failed to fetch blogs:", err);
        throw err;
    }
};

export const createBlog = async (token: string, postData: object) => {
    try {

        const response = await axios.post(`${BackendUrl}/api/v1/blog/create-post`,
            postData,
            {
                headers: {
                    Authorization: `${token}`,
                }
            });

        console.log("Fetched Blogs:", response.data);

        return response.data;
    } catch (err) {
        console.error("Failed to fetch blogs:", err);
        throw err;
    }
};



