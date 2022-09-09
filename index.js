const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.all('/test', (req, res) => {
    console.log("Test Page!")
    res.send('This is a test Page!')
})
app.listen(process.env.PORT || 3000)
