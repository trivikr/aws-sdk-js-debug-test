const { CreateBucketCommand: command } = require("@aws-sdk/client-s3");

const CreateBucketCommand = (params) => new command(params);

module.exports = {
  CreateBucketCommand,
};
