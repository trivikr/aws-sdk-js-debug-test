const { DeleteObjectCommand: command } = require("@aws-sdk/client-s3");

const DeleteObjectCommand = (params) => new command(params);

module.exports = {
  DeleteObjectCommand,
};
