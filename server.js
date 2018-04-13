const express = require('express');
const useragent = require('express-useragent');

const app = express();

app.use((req, rex, next) => {
    const ua = useragent.parse(req.headers['user-agent']);
    req.ua = ua;
    next();
});

app.get('/', (req, res) => {
    // res.send(JSON.stringify(req.ua, true, 4));
    const { isTablet, isMobile } = req;
    if (isMobile) {
        return res.sendFile(__dirname + '/build/touch.html');
    } else if (isTablet) {
        return res.sendFile(__dirname + '/build/tablet.html');
    }
    res.sendFile(__dirname + '/build/desktop.html');
});

app.use(express.static('build'))

const PORT = parseInt(process.env.PORT, 10);

if (!PORT) {
    throw new Error('PORT env variable must be set!');
}

app.listen(PORT, () => {
    console.log(`app listening at ${PORT}`);
});
