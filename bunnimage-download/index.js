const fetch = require('node-fetch');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let storageName = "bitcampblobstorage";
    var username = req.headers['username'];
    var download = ""; // Initialize download variable
    var downloadpng = "https://" + storageName + ".blob.core.windows.net/images/" + username + ".png"; // test if it's a png
    var downloadjpg = "https://" + storageName + ".blob.core.windows.net/images/" + username + ".jpeg"; // test if it's a jpeg


    let pngresp = await fetch(downloadpng, {
        method: 'GET',
     })
     let pngdata = await pngresp;
     
     let jpgresp = await fetch(downloadjpg, {
        method: 'GET',
     })
     let jpgdata = await jpgresp;

     // Determining the correct image link
     if (pngdata.statusText == "The specified blob does not exist." && jpgdata.statusText == "The specified blob does not exist." ) {
        success = false;
        context.log("Does not exist: " + pngdata)
        context.log("Does not exist: " + jpgdata)
     } else if (pngdata.statusText != "The specified blob does not exist.") {
        success = true;
        download = downloadpng
        context.log("Does exist: " + pngdata)
     } else if (jpgdata.statusText != "The specified blob does not exist.") {
        success = true;
        download = downloadjpg
        context.log("Does exist: " + jpgdata)
     }
     
     // we are returning the correct download URL
     context.res = {
        body: {
                 "downloadUri" : download,
                 "success": success,
        }
  };
  context.log(download);
  context.done();
  
}