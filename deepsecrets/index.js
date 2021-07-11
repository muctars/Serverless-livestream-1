const queryString = require('query-string');
const CosmosClient = require("@azure/cosmos").CosmosClient;

const config = {
    endpoint: process.env.COSMOS_ENDPOINT,
    key: process.env.COSMOS_KEY,
    databaseId: "SecretStorer",
    containerId: "secrets",
    partitionKey: {kind: "Hash", paths: ["/secrets"]}
  };
  

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    

    const queryObject = queryString.parse(req.body);
    let message = queryObject.Body;
    let document = {"message" : message};
    let items = await createDocument(document);
    const random_value = Math.floor(items.length * Math.random());
    const responseMessage = `Thanks 😊! Stored your secret "${message}". 😯 Someone confessed that: ${JSON.stringify(items[random_value].message)}`

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}

async function create(client){
    const partitionKey = config.partitionKey

    // Create database if it does not exist
    const { database } = await client.databases.createIfNotExists({
        id: config.databaseId
    });
    console.log(`Created database:\n${database.id}\n`);

    // Create database if it does not exist
    const { container } = await client
    .database(config.databaseId)
    .containers.createIfNotExists(
        { id: config.containerId, key: config.partitionKey },
        { offerThroughput: 400 });
        console.log(`Created database:\n${database.id}\n`);
}

async function createDocument(newItem){
    const { endpoint, key, databaseId, containerId } = config;
    const client = new CosmosClient({endpoint, key});

    const database = client.database(databaseId);
    const container = database.container(containerId);

    await create(client, databaseId, containerId);

    const querySpec = {
        query: "SELECT * from c"
    };
    
    const { resources: items } = await container.items.query(querySpec).fetchAll();

    const {resource: createdItem} = await container.items.create(newItem);

    return items;
}