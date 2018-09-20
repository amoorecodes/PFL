const express = require('express');
const bodyParser = require('body-parser');

const App = express();
const Port = 3333;

App.use(bodyParser('JSON'));
App.use(bodyParser('utf-encoded'));
App.use(express.static('static'));

App.listen(Port, () => console.log('Server is running on port', Port));

