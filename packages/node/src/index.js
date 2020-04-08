const { promisify } = require("util");
const { S3Client, CreateBucketCommand } = require("@aws-sdk-debug/client");
const sleep = promisify(setTimeout);

const waitForBucketExists = async (client, params) => {
  const maxAttempts = 20;
  let currentAttempt = 0;
  const delay = 5000;

  const checkForBucketExists = async () => {
    currentAttempt++;
    try {
      await client.headBucket(params);
      return;
    } catch (e) {
      if (currentAttempt > maxAttempts) {
        throw new Error("waitForBucketExists: max attempts exceeded");
      }
      await sleep(delay);
      return checkForBucketExists();
    }
  };

  return checkForBucketExists();
};

(async () => {
  const region = "us-west-2";

  const Bucket = `test-bucket-${Math.ceil(Math.random() * 10 ** 10)}`;
  const Key = `test-object`;

  const client = S3Client({ region });
  await client.send(CreateBucketCommand({ Bucket }));
  // await waitForBucketExists(client, { Bucket });
  // await client.putObject({ Bucket, Key, Body: "000000" });
  // await client.listObjects({ Bucket });
  // await client.deleteObject({ Bucket, Key });
  // await client.deleteBucket({ Bucket });
})();
