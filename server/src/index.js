const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
    res.send('hellworld')
});

app.listen(3005, () => {
    console.log('App listening on port 3005!');
});