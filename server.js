const http = require('http');
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 80;
const app = express();
const server = http.createServer(app);

app.use(express.static(__dirname + '/application/build'))

server.listen(PORT,() => {
    console.log('app is running at port', PORT)
})