import axios from 'axios';

export const getArticle = async (params) => {
    try {
        const response = await axios.get(`http://localhost:49160/article/${params.articleId}`);

        console.log(`Get Article: ${JSON.stringify(response.data)}`);

        return response.data;
    } catch(err) {
        console.log(`Error while retrieving articles: ${JSON.stringify(err)}`)
    };
};