const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('get'))

app.post('/tvShow', (req, rex) => res.send(`post`))

app.put('/tvShow', (req, rex) => res.send(`put`))

app.delete('/tvShow', (req, rex) => res.send(`delete`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))