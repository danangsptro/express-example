const { v4: uuidv4 } = require('uuid');

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

module.exports = {
    // INDEX
    index: (req, res) => {
        res.render('pages/user/index', {users})        
    },
    // CREATE
    create: (req, res) => {
        res.render('pages/user/create')
    },
    // STORE
    store: (req, res) => {
        users.push({
            id: uuidv4(),
            name: req.body.name,
            email: req.body.email
        })
        res.redirect('/users')
    },
    // SHOW
    show: (req, res) => {
        const id = req.params.id
        
        const data = users.filter(user => {
            return user.id == id
        })

        // res.send(data)
        res.render('pages/user/show', {user: data})
    },
    // UPDATE
    update: (req, res) => {
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
    },
    // DELETE
    delete: (req, res) => {
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
    }
}