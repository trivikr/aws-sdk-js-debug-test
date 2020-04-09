const { PutItemCommand: command } = require("@aws-sdk/client-dynamodb");
const debug = require("debug")("aws:sdk:js:dynamodb:PutItemCommand");

const PutItemCommand = (params) => {
  debug(params);
  return new command(params);
};

module.exports = {
  PutItemCommand,
};
