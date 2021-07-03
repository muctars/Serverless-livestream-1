let multipart = require('parse-multipart');
let fetch = require('node-fetch');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    
    // here's your boundary:
    var boundary = multipart.getBoundary(req.headers['content-type']);
    
    // TODO: assign the body variable the correct value
    var body = req.body;

    // parse the body
    var parts = multipart.Parse(body, boundary);

   // var convertedResult = Buffer.from(parts[0].data).toString('base64');
    let image = parts[0].data;

    let result = await analyzeImage(image);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { result }
    };
}

async function analyzeImage(img){
    const subscriptionKey = process.env.FACEAPI_KEY1;
    const uriBase = process.env.FACEAPI_ENDPOINT + '/face/v1.0/detect';

    let params = new URLSearchParams({
        'returnFaceId': 'true',
        'returnFaceAttributes': 'emotion'     //FILL IN THIS LINE
    })

    //await fetch(url, {options})

        //COMPLETE THE CODE
        let resp = await fetch(uriBase + '?' + params.toString(), {
            method: 'POST',  //WHAT TYPE OF REQUEST?
            body: img,  //WHAT ARE WE SENDING TO THE API?
          
              //ADD YOUR TWO HEADERS HERE
            headers: {
                'Content-type': 'application/octet-stream',
                'Ocp-Apim-Subscription-Key': subscriptionKey
            }
        })
    let data = resp.json();
    return data;
}


