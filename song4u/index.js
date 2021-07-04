const querystring = require('querystring');
const fetch = require('node-fetch');

module.exports = async function (context, req) {
    // user messages number, message is saved as req.body
    context.log(req.body);
    const queryObject = querystring.parse(req.body);
    const url = queryObject.MediaUrl0;

    let resp = await fetch(url, {
        method: 'GET'
    })

    let data = await resp.arrayBuffer(); // data holds the image that we just downloaded

    let age = age_data[0].faceAttributes.age;

    let generation = determine_generation(age);

    let age_data = await analyzeImage(data);
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: generation
    };
}
function determine_generation(age){
    let generation;
    if (age > 5 && age < 25){
        generation = "GenZ";
    } else if (age > 24 && age < 41){
        generation = "GenY";
    } else if (age > 40 && age < 57){
        generation = "GenX";
    } else if (age > 56 && age < 76){
        generation = "BabyBoomers";
    } else {
        generation = "Unknown";
    }
    return generation;
}
async function analyzeImage(img) {
    const subscriptionKey = process.env.FACEAPI_KEY1;
    const uriBase = process.env.FACEAPI_ENDPOINT + '/face/v1.0/detect';


    let params = new URLSearchParams({
        'returnFaceId': 'true',
        'returnFaceAttributes': 'age'     //FILL IN THIS LINE
    })


    let resp = await fetch(uriBase + '?' + params.toString(), {
        method: 'POST',  //WHAT TYPE OF REQUEST?
        body: img,  //WHAT ARE WE SENDING TO THE API?
      
          //ADD YOUR TWO HEADERS HERE
        headers: {
            'Content-type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': subscriptionKey
        }
    })

    let result = await resp.json();
    return result;
} 