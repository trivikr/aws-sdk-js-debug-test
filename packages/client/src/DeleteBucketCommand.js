const { DeleteBucketCommand: command } = require("@aws-sdk/client-s3");

const DeleteBucketCommand = (params) => new command(params);

module.exports = {
  DeleteBucketCommand,
};
