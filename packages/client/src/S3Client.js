const { S3Client: client } = require("@aws-sdk/client-s3");
export const S3Client = (params) => new client(params);
