const express = require('express')
const app = express()
const userRouter = require('./router/users')
const server = 3000

// Connection db mongodb
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/learning-nodejs', {useNewUrlParser: true, useUnifiedTopology: true});
// Batas Connection

// Response mongodb
const db = mongoose.connection
db.on('error', function () {
    console.log('connnection error');
})

db.once('open', function () {
    console.log('successfully connection');
})
// Batas Response

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/assets', express.static('public'))


// FUNTION MIDDLEWARE
var myLogger = function (req, res, next) {
    req.time = new Date()
    next()
}
app.use(myLogger);
// BATAS FUNCTION MIDDLEWARE

// TEMPLATE ENGINE
app.set('view engine', 'ejs')

// RUN TEMPLATE ENGINE
app.get('/', (req, res) => {
    const test = {
        id: 3,
        name: 'Belajar Node.Js',
        date: req.time.toString()
    }
    res.render('pages/index', { test: test });
});

app.get('/about', (req, res) => {
    res.render('pages/about')
})

app.use(userRouter)

app.listen(server, () => {
    console.log(`Server is Okay ${server}`);
});