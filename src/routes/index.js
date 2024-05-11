const { Router } = require('express')
const userRouter = require('./users.routes')
const movieNotesRouter = require('./moviesNotes.routes')




const routes = Router()


routes.use('/users', userRouter)
routes.use('/movies', movieNotesRouter)
module.exports = routes