const fetch = require('node-fetch');

function generateName(){
    let names = ["Shreya", "Emily", "Fifi", "Beau", "Evelyn", "Julia", "Daniel", "Fardeen"];
    let random_value = Math.floor(names.length * Math.random());
    let resultName = names[random_value];

    return resultName;
}


module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    

    let name1 = generateName();
    let name2 = generateName();
    let endpoint = "https://cataas.com/cat/cute/says/Bitcamp";

    let resp = await fetch(endpoint, {
        method: 'GET'
    });
    // First cat photo
    let data = await resp.arrayBuffer()
    // we need to receive it as a buffer since this is an image we are receiving from the API
    // Buffer?? https://developer.mozilla.org/en-US/docs/Web/API/Blob
    let base64data = Buffer.from(data).toString('base64');
   
    let resp2 = await fetch(endpoint, {
        method: 'GET'
    });
    
    //Second cat photo
    let data2 = await resp2.arrayBuffer()
    // we need to receive it as a buffer since this is an image we are receiving from the API
    // Buffer?? https://developer.mozilla.org/en-US/docs/Web/API/Blob
    let base64data2 = Buffer.from(data2).toString('base64');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
           cat1: base64data,
           cat2: base64data2,
           names: [name1, name2]
        }
    };
}