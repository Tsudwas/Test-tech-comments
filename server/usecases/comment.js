import { v4 as uuidv4 } from 'uuid';
import {
    setData,
    getAllDatas,
    updateData,
    deleteData
} from "../services/dynamoDB.js";

export const postComment = async (req, res) => {
  const { mediaId, comment, author } = req.body.params;
  const commentId = uuidv4();
  
  const params = {
       TableName: "comments",
       Item: {
         commentId,
         mediaId,
         comment,
         author,
         replies: []
       },
  };

  const { $metadata } = await setData(params, res);
  
  res.status($metadata.httpStatusCode).send();
};

export const getAllComments = async (req, res) => {
  const params = {
    TableName: "comments"
  };
  
  const { $metadata, Items } = await getAllDatas(params, res);
  
  res.status($metadata.httpStatusCode).send(Items);
};

export const getMediaComments = async (req, res) => {
  const { mediaId } = req.params;
  
  const params = {
    TableName: "comments",
    FilterExpression: '#mediaId =:mediaId',
    ExpressionAttributeValues: { ':mediaId': mediaId },
    ExpressionAttributeNames: { '#mediaId': 'mediaId' }
  };
  
  const { $metadata, Items } = await getAllDatas(params, res);

  res.status($metadata.httpStatusCode).send(Items);
};

export const replyToComment = async (req, res) => {
  const { commentId, reply } = req.body.params;
  
  const params = {
    TableName: "comments",
    Key: {
     commentId,
    },
    UpdateExpression: 'SET replies = list_append(replies, :i)',
    ExpressionAttributeValues: {
      ':i': [reply]
     }
  };
      
  const { $metadata } = await updateData(params, res);
  
  res.status($metadata.httpStatusCode).send();
};

export const rateComment = async (req, res) => {
  const { commentId, rating } = req.body.params;
  
  const params = {
    TableName: "comments",
    Item: {
      commentId
    }
  };
  
  const { $metadata } = await updateData(params, res);
  
  res.status($metadata.httpStatusCode).send();
};

export const deleteComment = async (req, res) => {
  const { commentId } = req.body.params;

  const params = {
    TableName: "comments",
    Item: {
      commentId
    }
  };

  const { $metadata } = await deleteData(params, res);

  res.status($metadata.httpStatusCode).send();
};
  