const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./server/routes/authRouter')
const PORT = process.env.PORT || 5000;
const cors  = require('cors')

const app = express()

app.use(express.json(),cors())
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

