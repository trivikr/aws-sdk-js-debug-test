const { DynamoDBClient } = require("./DynamoDBClient");
const { CreateTableCommand } = require("./CreateTableCommand");
const { PutItemCommand } = require("./PutItemCommand");
const { DeleteItemCommand } = require("./DeleteItemCommand");
const { DeleteTableCommand } = require("./DeleteTableCommand");
const { waitForTableExists } = require("./waitForTableExists");

module.exports = {
  DynamoDBClient,
  CreateTableCommand,
  PutItemCommand,
  DeleteItemCommand,
  DeleteTableCommand,
  waitForTableExists,
};
