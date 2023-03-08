import axios from 'axios';

export const getComments = async (params) => {
        const { mediaId } = params;
    try {
        const response = await axios.get(`http://localhost:49160/comment/${mediaId}`);

        console.log(`All comments: ${JSON.stringify(response.data)}`);

        return response.data;
    } catch(err) {
        console.log(`Error while retrieving comments: ${JSON.stringify(err)}`)
    };
};

export const getRecentComments = async (params) => {
    try {
        const response = await axios.get(`http://localhost:49160/comment/`, { params });

        console.log(`Recent comments: ${JSON.stringify(response.data)}`);

        return response.data;
    } catch(err) {
        console.log(`Error while retrieving comments: ${JSON.stringify(err)}`)
    };
};

export const postComment = async (params) => {
    const { mediaId } = params;

    try {
        const response = await axios.post(`http://localhost:49160/comment/${mediaId}`, { params });

        console.log(`Posted comments: ${JSON.stringify(response.data)}`);

        return response.data;
    } catch(err) {
        console.log(`Error while retrieving comments: ${JSON.stringify(err)}`)
    };
};

export const postReply = async (params) => {
    const { commentId } = params;

    try {
        const response = await axios.put(`http://localhost:49160/comment/${commentId}/reply`, { params });

        console.log(`Posted comments: ${JSON.stringify(response.data)}`);

        return response.data;
    } catch(err) {
        console.log(`Error while retrieving comments: ${JSON.stringify(err)}`)
    };
};