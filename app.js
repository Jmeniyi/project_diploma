const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./server/routes/authRouter')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/',{
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            family: 4,
        })
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

/*
mongodb+srv://didrevovk:admin@cluster0.azewjar.mongodb.net/?retryWrites=true&w=majority
app.use(
    cors(),
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json(),
    morgan('dev')
)

const authRout = require('./server/routes/auth.js')
const mainPage = require('./server/routes/mainPage.js')

app.get('/api/mainPage', (req, res) => {
    res.send(db)
})

app.listen(port, function () {
    console.log("server start on port: " + port);
})

http://localhost:3000/api/auth/login
app.use('/api/auth', authRout)

http://localhost:3000/api/mainPage
app.use('/api/mainPage', mainPage)


Here is an example of how you can do this using Express and Axios:
 res.send(config)
________________________________
const express = require('express')
const app = express()
port = process.env.PORT || 3000;
var config = require('./test.json');
const http = require('http');
var cors = require('cors')
app.use(cors())

app.get('/', function (req,res) {
    res.send(config)
})

app.listen(port, function () {
    console.log("server start on port: " + port);
})
----------------------------------


const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const PORT = 3000;
const path = require('path');
const fs = require('fs');
*/
