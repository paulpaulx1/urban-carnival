const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  try {
    res.send('hellworld');
  } catch (err) {
    next();
  }
});


app.listen(3005, () => {
  console.log('App listening on port 3005!');
});
