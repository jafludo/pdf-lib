const express = require('express');
const cors = require('cors');  
const dotenv = require('dotenv');
const app = express();
const http = require('http');

//Server Web HTTP
var server = http.createServer(app).listen("7000", function(){
 
});

dotenv.config();

app.use(cors({credentials: true, origin: 'http://127.0.0.1:7000'}));

app.use(express.static('../public'));
