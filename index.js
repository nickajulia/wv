const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();


/**
 * This part is related to the webview test.
 */
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header('X-Frame-Options: ALLOW-FROM https://*.messenger.com');
    res.header('X-Frame-Options: ALLOW-FROM http://*.facebook.com');
    res.header('Access-Control-Allow-Origin: *');
    res.header('Access-Control-Allow-Credentials: true');
    next();
});

/**
 * Tend of webview test.
 */
app.get('/', (req, res) => {
    res.send('Up and running!');
});
app.get('/webhook', (req, res) => {
    res.send('Updated!');
});

//start server
app.listen(process.env.PORT, () => console.log('App started!'));