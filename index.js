const express = require('express')
const userRouter = require('./router/users')
const app = express()
const server = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'))


// FUNTION MIDDLEWARE
var myLogger = function (req, res, next) {
    req.time = new Date()
    next()
}
app.use(myLogger);
// BATAS FUNCTION MIDDLEWARE

// TEMPLATE ENGINE
app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//     const test = {
//         id: 3,
//         name: 'Belajar Node.Js',
//         date: req.time.toString()
//     }
//     console.log(req.time.toString());
//     res.json(test);
// });

// RUN TEMPLATE ENGINE
app.get('/', (req, res) => {
    const test = {
        id: 3,
        name: 'Belajar Node.Js',
        date: req.time.toString()
    }
    res.render('pages/index', {test: test});
});

app.get('/about', (req, res) => {
    res.render('pages/about')
})

app.use(userRouter)

app.listen(server, () => {
    console.log(`Server is Okay ${server}`);
});