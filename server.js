const cookieSession = require('cookie-session')
const express = require('express');
const app = express();
const port = 3000;

import { runGetStarted } from './client/index.js';

app.get('/', (req, res) => {
    res.send('Hello World!');
    runGetStarted();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.use(express.static('public'));