const fetch = require('node-fetch');

module.exports = async function (context, req) {
    const endpoint = "https://api.funtranslations.com/translate/yoda.json";

    

    const text = (req.query.text || (req.body && req.body.text));
    // req.query.text checks is text was sent as part of the query string
    // (req.body && req.body.text) checks if text was sent in the payload of the request. We must check if there is a payload to begin with.
    // the payload is the body, a json object, part of a post or a put

    const result = await fetch(endpoint, {
        method: 'post',
        body:    JSON.stringify({text: text}), 
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
        
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: result.contents.translated
    };
}

// Include api endpoint in variable
// determine input to be translated
// Call the endpoint
// display result in context.res object

// before context.res, make an async call to the twilio api
// npm install their client library