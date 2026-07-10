require("dotenv").config({
    path: "../.env"
});

console.log("API KEY:", process.env.OPENAI_API_KEY)

const OpenAI = require('openai');
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

module.exports = client;