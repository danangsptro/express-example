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
    index: (req, res) => {
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
    },
    store: (req, res) => {
        users.push(req.body);
        res.json({
            status: true,
            data: users,
            message: "Data Berhasil Di simpan",
            method: req.method,
            url: req.url
        })
    },
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