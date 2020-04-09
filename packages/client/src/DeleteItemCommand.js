const { DeleteItemCommand: command } = require("@aws-sdk/client-dynamodb");
const debug = require("debug")("aws:sdk:js:dynamodb:DeleteItemCommand");

const DeleteItemCommand = (params) => {
  debug(params);
  return new command(params);
};

module.exports = {
  DeleteItemCommand,
};
