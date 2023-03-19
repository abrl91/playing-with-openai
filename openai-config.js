const { Configuration, OpenAIApi } = require("openai");

const organization = process.env.ORGANIZATION_ID;
const apiKey = process.env.OPENAI_API_KEY;

const configuration = new Configuration({
    organization,
    apiKey,
});

const openai = new OpenAIApi(configuration);

module.exports = openai;

