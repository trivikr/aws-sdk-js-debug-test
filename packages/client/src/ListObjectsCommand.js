const { ListObjectsCommand: command } = require("@aws-sdk/client-s3");
const debug = require("debug")("aws:sdk:js:s3:ListObjectsCommand");

const ListObjectsCommand = (params) => {
  debug(params);
  return new command(params);
};

module.exports = {
  ListObjectsCommand,
};
