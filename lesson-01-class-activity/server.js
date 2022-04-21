const express = require('express');
const routes = require('./routes');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));


app.listen(port, () => {
    console.log('Example app listening on port 3000');
});

// git remote set-url --push origin giturl
// git remote set-url --push origin herokuurl