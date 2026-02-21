const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

__path = process.cwd();

const PORT = process.env.PORT || process.env.CC_APP_PORT || 8080;

require('events').EventEmitter.defaultMaxListeners = 500;

let code = require('./pair');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/code', code);

app.use('/pair', (req, res) => {
    res.sendFile(path.join(__path, 'main.html'));
});

app.use('/', (req, res) => {
    res.sendFile(path.join(__path, 'main.html'));
});

app.listen(PORT, () => {
    console.log(`
╭───────────────────────────────⭓
│  🥷 PASIYA MD - Mini Bot Base
│  Server running on port ${PORT}
│  Visit: http://localhost:${PORT}
╰───────────────────────────────⭓
`);
});

module.exports = app;
