const piglatin = require('pig-latin');
const Joke = require('awesome-dev-jokes');

module.exports = async function (context, req) {
    let regularText = Joke.getRandomJoke();
    const pigLatinText = piglatin(regularText);
    const responseMessage = `text: ${regularText}\nTranslation: ${pigLatinText}`;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}