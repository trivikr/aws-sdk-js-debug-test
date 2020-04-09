const { CreateTableCommand: command } = require("@aws-sdk/client-dynamodb");
const debug = require("debug")("aws:sdk:js:dynamodb:CreateTableCommand");

const CreateTableCommand = (params) => {
  debug(params);
  return new command(params);
};

module.exports = {
  CreateTableCommand,
};
