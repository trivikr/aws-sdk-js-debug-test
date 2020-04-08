const { S3Client: client } = require("@aws-sdk/client-s3");
const debug = require("debug")("aws:sdk:js:s3");

const S3Client = (params) => {
  debug("creating client with params", params);
  const clientObj = new client(params);
  debug("client created");
  return clientObj;
};

module.exports = {
  S3Client,
};
