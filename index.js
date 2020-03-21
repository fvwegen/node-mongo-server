//https://github.com/samaronybarros/movies-app
const express = require('express')
//toegevoegd voor https
//const http = require('http');
//const https = require('https');
//const fs = require('fs');
//const httpPort = 3600;
//const httpsPort = 3601;
//
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')

const divisionsRouter = require('./routes/divisions-router')

const app = express()
//toegevoegd voor https
//var key = fs.readFileSync(__dirname + '/certsFiles/selfsigned.key');
//var cert = fs.readFileSync(__dirname + '/certsFiles/selfsigned.crt');

/* var credentials = {
  key: key,
  cert: cert
}; */
//buiten bedrijf gesteld voor https:
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', divisionsRouter)

//toegevoegd voor https
//var httpServer = http.createServer(app);
//var httpsServer = https.createServer(credentials, app);


//httpServer.listen(httpPort, () => {
//  console.log("Http server listing on port : " + httpPort)
//});

//httpsServer.listen(httpsPort, () => {
//  console.log("Https server listing on port : " + httpsPort)
//});
//buiten bedrijf gesteld voor https
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))


