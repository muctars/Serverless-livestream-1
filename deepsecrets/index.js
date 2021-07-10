const queryString = require('query-string');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const queryObject = queryString.parse(req.body);



    context.res = {
        // status: 200, /* Defaults to 200 */
        body: queryObject.Body
    };
}