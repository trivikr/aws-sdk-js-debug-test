const { ListObjectsCommand: command } = require("@aws-sdk/client-s3");

const ListObjectsCommand = (params) => new command(params);

module.exports = {
  ListObjectsCommand,
};
