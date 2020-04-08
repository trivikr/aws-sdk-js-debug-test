const { HeadBucketCommand: command } = require("@aws-sdk/client-s3");

const HeadBucketCommand = (params) => new command(params);

module.exports = {
  HeadBucketCommand,
};
