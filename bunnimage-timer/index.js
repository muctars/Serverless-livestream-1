const { BlobServiceClient } = require("@azure/storage-blob");
const connectionstring = process.env["AZURE_STORAGE_CONNECTION_STRING"];
const account = "bitcampblobstorage";


module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    const blobServiceClient = await BlobServiceClient.fromConnectionString(connectionstring);
    const deletecontainer = "images";
    const deletecontainerClient = await blobServiceClient.getContainerClient(deletecontainer);

    for await (const blob of deletecontainerClient.listBlobsFlat()) {
        context.log('\t', blob.name);
        await deleteBlob(blob.name, blobServiceClient, deletecontainer, deletecontainerClient)
        // access the blob's name and call deleteBlob to delete it!
    }
    
    if (myTimer.isPastDue)
    {
        context.log('JavaScript is running late!');
    }
    context.log('JavaScript timer trigger function ran!', timeStamp);   
};

async function deleteBlob(filename) {
    const blobServiceClient = deletecontainerClient.getBlockBlobClient(filename); // Within the container, fetch the blob client that has the name of filename
    const deletecontainer = await deleteblockBlobClient.download(0); //download the blob from the system and fetch a reference to the readable stream

    const blobDeleteResponse = deleteblockBlobClient.delete(); 

    result = {
        body : {
            deletename: filename,
            success: true
        }
    };
    return result;
    
}