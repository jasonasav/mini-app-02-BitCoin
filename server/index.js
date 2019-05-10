const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios =require('axios');
const api = require('./controller.js')
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/../client/dist')));

app.get('/bitcoin', api.getBitcoin)

let port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port: ${port}`));

