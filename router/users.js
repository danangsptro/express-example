const express = require('express')
const router = express.Router()
const userController = require('../controller/user')

router.route('/users')
    .get(userController.index)
    .post(userController.store)

router.get('/user/create', userController.create)
router.get('/users/:id', userController.show)
router.put('/users/:id', userController.update)
router.delete('/users/:userId', userController.delete)
router.get('/users/:id/edit', userController.edit)


module.exports = router