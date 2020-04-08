const { CreateBucketCommand: command } = require("@aws-sdk/client-s3");
export const CreateBucketCommand = (params) => new command(params);
