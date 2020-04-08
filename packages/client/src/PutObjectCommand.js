const { PutObjectCommand: command } = require("@aws-sdk/client-s3");

const PutObjectCommand = (params) => new command(params);

module.exports = {
  PutObjectCommand,
};
