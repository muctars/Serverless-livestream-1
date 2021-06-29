// template code whenever you create an HTTP trigger function
// this is getting something from a parameter and outputting it to the user

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const password = req.query.password;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: password
    };

}

