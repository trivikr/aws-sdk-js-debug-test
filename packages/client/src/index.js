const { S3Client } = require("./S3Client");
const { CreateBucketCommand } = require("./CreateBucketCommand");
const { HeadBucketCommand } = require("./HeadBucketCommand");
const { PutObjectCommand } = require("./PutObjectCommand");
const { ListObjectsCommand } = require("./ListObjectsCommand");
const { DeleteObjectCommand } = require("./DeleteObjectCommand");
const { DeleteBucketCommand } = require("./DeleteBucketCommand");

module.exports = {
  S3Client,
  CreateBucketCommand,
  HeadBucketCommand,
  PutObjectCommand,
  ListObjectsCommand,
  DeleteObjectCommand,
  DeleteBucketCommand,
};
