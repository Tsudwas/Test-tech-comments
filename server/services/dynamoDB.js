import {
    GetCommand,
    PutCommand,
    UpdateCommand,
    DeleteCommand,
    ScanCommand
} from "@aws-sdk/lib-dynamodb";

import { dynamoDbDocClient } from "../dbSetup.js";
import { handleError } from "./error.js";


export const getAllDatas = async (params, res) => {
    try {
        const data = await dynamoDbDocClient.send(new ScanCommand(params));

        console.log("Success on retrieving all datas:", data.Item);

        return data;
      } catch (err) {
        handleError(err.$metadata.httpStatusCode, err, res);
    }
};

export const getData = async (params, res) => {
    try {
        const data = await dynamoDbDocClient.send(new GetCommand(params));

        console.log("Success on retrieving data :", data.Item);

        return data;
      } catch (err) {
        handleError(err.$metadata.httpStatusCode, err, res);
    }
};

export  const setData = async (params, res) => {
    try {
        const data = await dynamoDbDocClient.send(new PutCommand(params));

        console.log("Success - item added or updated", data);

        return data;
    } catch (err) {
        handleError(err.$metadata.httpStatusCode, err, res);
    }
};

export const updateData = async (params, res) => {
    try {
        const data = await dynamoDbDocClient.send(new UpdateCommand(params));

        console.log("Success - item added or updated", data);
        
        return data;
      } catch (err) {
        handleError(err.$metadata.httpStatusCode, err, res);
    }
};

export const deleteData = async (params, res) => {
    try {
        await dynamoDbDocClient.send(new DeleteCommand(params));

        console.log("Success - item deleted");
      } catch (err) {
        handleError(err.$metadata.httpStatusCode, err, res);
    }
};
