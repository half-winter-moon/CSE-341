const express = require('express');
const routes = require('./routes');
const app = express();
const port = 300;

app.use('/', require('./routes'));


app.listen(port, () => {
    console.log('Example app listening on port 3000');
});