const { DescribeTableCommand } = require("./DescribeTableCommand");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const waitForTableExists = async (client, params) => {
  const maxAttempts = 20;
  let currentAttempt = 0;
  const delay = 5000;

  const checkForTableExists = async () => {
    currentAttempt++;
    try {
      const response = await client.send(DescribeTableCommand(params));
      if (
        response &&
        response.Table &&
        response.Table.TableStatus === "ACTIVE"
      ) {
        return;
      }
      await sleep(delay);
      return checkForTableExists();
    } catch (e) {
      if (currentAttempt > maxAttempts) {
        throw new Error("waitForTableExists: max attempts exceeded");
      }
      await sleep(delay);
      return checkForTableExists();
    }
  };

  return checkForTableExists();
};

module.exports = {
  waitForTableExists,
};
