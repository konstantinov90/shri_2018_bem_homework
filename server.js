const express = require('express');
const useragent = require('express-useragent');

const app = express();

app.use((req, rex, next) => {
    const ua = useragent.parse(req.headers['user-agent']);
    req.ua = ua;
    next();
});

app.get('/', (req, res) => {
    res.send(JSON.stringify(req.ua, true, 4));
});

const PORT = 9000;

app.listen(PORT, () => {
    console.log(`app listening at ${PORT}`);
});
