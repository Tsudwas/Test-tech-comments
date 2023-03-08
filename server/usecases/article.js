import {
    getData
} from "../services/dynamoDB.js";

export const getArticle = async (req, res) => {
  const { articleId } = req.params;
  const params = {
     TableName: "articles",
     Key: {
       articleId
     },
   };
  
   const result = await getData(params);
  
   res.send(result.Item);
};
