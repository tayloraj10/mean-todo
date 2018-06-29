'use strict';

const express = require('express');
const router = require('./api/index.js');


const app = express();

app.use('/', express.static('public/public'));

app.use('/api', router);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});