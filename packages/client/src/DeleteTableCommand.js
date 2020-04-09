const { DeleteTableCommand: command } = require("@aws-sdk/client-dynamodb");
const debug = require("debug")("aws:sdk:js:dynamodb:DeleteTableCommand");

const DeleteTableCommand = (params) => {
  debug(params);
  return new command(params);
};

module.exports = {
  DeleteTableCommand,
};
