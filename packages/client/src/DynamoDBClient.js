const { DynamoDBClient: client } = require("@aws-sdk/client-dynamodb");
const debug = require("debug")("aws:sdk:js:dynamodb:DynamoDBClient");

const DynamoDBClient = (params) => {
  debug(params);
  return new client(params);
};

module.exports = {
  DynamoDBClient,
};
