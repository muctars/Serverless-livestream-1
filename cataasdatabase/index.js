const fetch = require('node-fetch');
const connectionString = process.env.CATPICS_CONNECTION_STRING;
const { BlobServiceClient } = require("@azure/storage-blob");
module.exports = async function (context, myTimer) {
    let timeStamp = new Date().toISOString();
    
    const endpoint = "https://cataas.com/cat";

    let result = await fetch(endpoint)
        .then(res => res.blob());

        await uploadFile(result, timeStamp);
    if (myTimer.isPastDue)
    {
        context.log('JavaScript is running late!');
    }
    context.log('JavaScript timer trigger function ran!', timeStamp);   
};

async function uploadFile(blob, timeStamp){
    // we want to access a specific container in azure, and we are giving our credentials
    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString); //
    const containerName = "catpics";
    const containerClient = blobServiceClient.getContainerClient(containerName);    // Get a reference to a container

    
    const blockBlobClient = containerClient.getBlockBlobClient(timeStamp + ".jpeg"); // Get a block blob client

    const uploadBlobResponse = await blockBlobClient.upload(blob, blob.size);

    return "Your file has been saved";
}
// create endpoint variable for cataas api
// make a get request to recvieve an image
// store image in blob container
