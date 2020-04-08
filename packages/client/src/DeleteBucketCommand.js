const { DeleteBucketCommand: command } = require("@aws-sdk/client-s3");
const debug = require("debug")("aws:sdk:js:s3:DeleteBucketCommand");

const DeleteBucketCommand = (params) => {
  debug(params);
  return new command(params);
};

module.exports = {
  DeleteBucketCommand,
};
