const express = require('express')
const userRouter =  require('./router/user')
const app = express()
const server = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    const test = {
        id : 3,
        name : 'Belajar Node.Js',
    }
    res.send(test);
});

app.get('/about', (req, res) => {
    res.redirect('https://expressjs.com/en/guide/routing.html')
})

app.use(userRouter)

app.listen(server, () => {
    console.log(`Server is Okay ${server}`);
});