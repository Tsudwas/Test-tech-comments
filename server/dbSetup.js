import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const credentials = {
    region: "eu-west-3",
    credentials: {
      accessKeyId: "yourKeyHere",
      secretAccessKey: "yourKeyHere"
    }
};

const dynamoDbClient = new DynamoDBClient(credentials);

const marshallOptions = {
  // Whether to automatically convert empty strings, blobs, and sets to `null`.
  convertEmptyValues: false, // false, by default.
  // Whether to remove undefined values while marshalling.
  removeUndefinedValues: true, // false, by default.
  // Whether to convert typeof object to map attribute.
  convertClassInstanceToMap: false, // false, by default.
};

const unmarshallOptions = {
  // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
  wrapNumbers: false, // false, by default.
};

// Create the DynamoDB document client.
const dynamoDbDocClient = DynamoDBDocumentClient.from(dynamoDbClient, {
  marshallOptions,
  unmarshallOptions,
});

export { dynamoDbDocClient };