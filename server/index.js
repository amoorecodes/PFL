const express = require('express')
const bodyParser = require('body-parser')
const { router } = require('./router')

const App = express()
const Port = 3333

App.use(bodyParser.json())
App.use(bodyParser.urlencoded({ extended: true }))
App.use(express.static('static'))
App.use('/api', router)

App.listen(Port, () => console.log('Server is running on port', Port))
