const { HeadBucketCommand: command } = require("@aws-sdk/client-s3");
const debug = require("debug")("aws:sdk:js:s3:HeadBucketCommand");

const HeadBucketCommand = (params) => {
  debug(params);
  return new command(params);
};

module.exports = {
  HeadBucketCommand,
};
