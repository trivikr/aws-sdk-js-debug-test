const { S3Client: client } = require("@aws-sdk/client-s3");

const S3Client = (params) => new client(params);

module.exports = {
  S3Client,
};
