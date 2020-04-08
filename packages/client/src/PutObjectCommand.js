const { PutObjectCommand: command } = require("@aws-sdk/client-s3");
const debug = require("debug")("aws:sdk:js:s3:PutObjectCommand");

const PutObjectCommand = (params) => {
  debug(params);
  return new command(params);
};

module.exports = {
  PutObjectCommand,
};
