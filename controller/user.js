const { request } = require('express');
const User = require('../models/user')


module.exports = {
    // INDEX
    index: (req, res) => {
        let keyword = {}
        if (req.query.keyword) {
            keyword = { name: { $regex: req.query.keyword } }
        }

        // Cara 1
        // User.find(keyword ,"name _id", function (err, users) {
        //     if (err) {
        //         console.log(err)
        //     } else {
        //         console.log(users)
        //     }
        //     res.render('pages/user/index', { users })
        // })


        // Cara 2
        const Query = User.find(keyword)
        Query.select('name _id')
        Query.exec(function (err, users) {
            if (err) {
                console.log(err)
            } else {
                console.log(users)
            }
            res.render('pages/user/index', { users })
        });
    },
    // CREATE
    create: (req, res) => {
        res.render('pages/user/create')
    },
    // STORE
    store: (req, res) => {
        // Cara 1   
        // const user = new User({
        //     name: req.body.name,
        //     email: req.body.email,
        //     password: req.body.password
        // })

        // user.save(function (err, result) {
        //     if (err) {
        //         console.log(err)
        //     } else {
        //         console.log(result)
        //     }
        //     res.redirect('/users')

        // })

        // Cara 2
        const user = User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }, function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log(result)
            }
            res.redirect('/users')
        })

    },
    // SHOW
    show: (req, res) => {
        const id = req.params.id

        // const data = users.filter(user => {
        //     return user.id == id
        // })

        User.findById(id, function (err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log(result)
            }
            res.render('pages/user/show', { user: result })
        })

        // res.send(data)
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

    // Edit
    edit: (req, res) => {
        const id = req.params.id
        User.findById(id, function (err, result) {
            if(err) {
                console.log(err)
            } else {
                console.log(result)
            }
            res.render('pages/user/edit', {user: result})
        });
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