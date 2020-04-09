const { DescribeTableCommand: command } = require("@aws-sdk/client-dynamodb");
const debug = require("debug")("aws:sdk:js:dynamodb:DescribeTableCommand");

const DescribeTableCommand = (params) => {
  debug(params);
  return new command(params);
};

module.exports = {
  DescribeTableCommand,
};
