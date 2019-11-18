const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log(req);
    res.send('hello world!!');
});
const PORT = 8080;

app.listen(PORT);

console.log(`Running ${PORT}`);