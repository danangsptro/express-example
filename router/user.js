const { request } = require('express')
const express = require('express')
const router = express.Router()


let users = [
    {
        id: 1,
        name: 'Danang',
        email: 'danang@gmail.com'
    },
    {
        id: 2,
        name: 'Testing',
        email: 'testing@gmail.com'
    }
]

router.get('/users', (req, res) => {
    if (users.length > 0) {
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url
        })
    } else {
        res.json({
            status: false,
            message: 'Data Not Found'
        })
    }
})

router.post('/users', (req, res) => {
    users.push(req.body);
    res.json({
        status: true,
        data: users,
        message: "Data Berhasil Di simpan",
        method: req.method,
        url: req.url
    })
})

router.put('/users/:id', (req, res) => {
    const id = req.params.id
    users.filter(user => {
        if (user.id == id) {
            user.id = id
            user.name = req.body.name
            user.email = req.body.email
            return user
        }
    })
    res.json({
        status: true,
        data: users,
        message: "Data Berhasil Di Edit",
        method: req.method,
        url: req.url
    })
})

router.delete('/users/:userId', (req, res) => {
    let id = req.params.userId

    if (users = users.filter(user => user.id != id)) {
        res.json({
            status: true,
            data: users,
            message: "Data Berhasil Di hapus",
            method: req.method,
            url: req.url
        })
    } 
})

router.delete('/admin/:userId/:booksId', (req, res) => {
    const a = req.params
    res.send(a)
})

// Route Grup
router.route('/book')
    .get((req, res) => {
        res.send('hello')
    })
    .post((req, res) => {
        res.send('post hello')
    })
    .put((req, res) => {
        res.send('put hello')
    })

module.exports = router