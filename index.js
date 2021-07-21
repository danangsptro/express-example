const express = require('express')
const app = express()
const server = 3000

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/users', (req, res) => {
    res.send('Get User')
})

app.post('/users', (req, res) => {
    res.send('Post User')
})

app.put('/users/:id', (req, res) => {
    const id = req.params
    res.send(id)
})

app.delete('/users/:userId', (req, res) => {
    res.send(req.params.userId)
})

app.delete('/admin/:userId', (req, res) => {
    const a = req.params
    res.send(a)
})

// app.listen(3000, function(){
//     console.log('server is okay');
// });

app.listen(server, () => {
    console.log(`Server is Okay ${server}`);
});