const express = require('express');
import birds from './birds.js';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/example/a", (req, res) => {
  res.send("Hello from A!");
});

app.get('/example/b', (req, res, next) => {
    console.log('the response will be sent by the next function...')
    next()
}, (req, res) => [
    res.send('Hello from B!')
])

const cb0 = function (req, res, next) {
    console.log('function call: CB0')
    next()
}

const cb1 = function (req, res, next) {
    console.log('function call: CB1')
    next()
}

const cb2 = function (req, res) {
    res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])

app.get('/example/d', [cb0, cb1], (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next()
}, (req, res) => {
    res.send('Hello from D!');
})

// app.route()
app.route('/book').get((req, res) => {
    res.send('Get a random book')
})
.post((req, res) => {
    res.send('Add a book')
})
.put((req, res) => {
    res.send('Update the book')
})

app.use('/birds', birds)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
