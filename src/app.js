const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(cors({credentials: true, origin: 'http://127.0.0.1:7000'}));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static('../public'));
