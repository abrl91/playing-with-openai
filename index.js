const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 3333;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const openai = require("./openai-config");
const {createImageRouter} = require('./routes/image.router');

app.post('/', (req, res) => {
    res.send('Hello openai API!')
});

app.use('/images', createImageRouter);


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});
