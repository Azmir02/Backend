const express = require('express')
const chalk = require('chalk')
const cors = require('cors')
const userRouter = require('./controllars/userRouter')
const app = express()

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/', userRouter)

app.listen(8000, () => {
    console.log(chalk.bgGreen('Server is running on port 8000'))
})

