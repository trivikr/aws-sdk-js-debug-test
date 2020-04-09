const {
  DynamoDBClient,
  CreateTableCommand,
  PutItemCommand,
  DeleteItemCommand,
  DeleteTableCommand,
  waitForTableExists,
} = require("@aws-sdk-debug/client");

const {
  fromCognitoIdentityPool,
} = require("@aws-sdk/credential-provider-cognito-identity");
const { CognitoIdentityClient } = require("@aws-sdk/client-cognito-identity");

(async () => {
  const region = "us-west-2";
  const identityPoolId = "IDENTITY_POOL_ID";

  const TableName = `test-table-${Math.ceil(Math.random() * 10 ** 10)}`;
  const itemDetails = { id: { S: "id" } };

  const client = DynamoDBClient({
    region,
    credentials: fromCognitoIdentityPool({
      client: new CognitoIdentityClient({
        region,
      }),
      identityPoolId,
    }),
  });
  await client.send(
    CreateTableCommand({
      TableName,
      AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
      KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
      BillingMode: "PAY_PER_REQUEST",
    })
  );
  await waitForTableExists(client, { TableName });
  await client.send(PutItemCommand({ TableName, Item: itemDetails }));
  await client.send(DeleteItemCommand({ TableName, Key: itemDetails }));
  await client.send(DeleteTableCommand({ TableName }));
})();
