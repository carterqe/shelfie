require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express()
const controller = require('./controllers/controller')
app.use(express.json())
const {SERVER_PORT, CONNECTION_STRING} = process.env
const massive = require('massive')

massive(CONNECTION_STRING).then(databaseConnection => {
  app.set('db', databaseConnection)
  console.log('Dont worry theres only ')
  app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} days of eternal peace left.`))
})

app.post('/api/inventory', controller.addInventory)
app.get('/api/inventory', controller.getInventory)
app.put('/api/inventory/:id', controller.updateInventory)
app.delete('/api/inventory/:id', controller.deleteInventory)
