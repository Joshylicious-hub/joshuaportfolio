require("dotenv").config({
    path: require("path").resolve(__dirname, "../../.env")
});

const OpenAI = require('openai');
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

module.exports = client;