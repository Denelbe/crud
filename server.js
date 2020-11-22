
const express = require('express');

const app = express();

app.use(express.static('./dist/crud'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/crud/'}),
);

app.listen(process.env.PORT || 8080);