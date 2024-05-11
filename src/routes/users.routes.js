const {Router} = require('express')
const UsersController = require('../controllers/UsersController')

const userRouter = Router()
const usersController = new UsersController()

userRouter.post('/', usersController.create)
userRouter.get('/', usersController.show)
userRouter.get('/:user_id', usersController.findOne)
userRouter.put('/:id', usersController.update)
userRouter.delete('/:user_id', usersController.delete)

module.exports = userRouter