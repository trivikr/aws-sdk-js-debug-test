const { S3Client: client } = require("@aws-sdk/client-s3");
const debug = require("debug")("aws:sdk:js:s3:S3Client");

const S3Client = (params) => {
  debug(params);
  return new client(params);
};

module.exports = {
  S3Client,
};
