const express = require('express')
const apirouter = require('./routes/api-routes')
const mongoose = require('mongoose')

const app = express()

const port = 8080
app.use(express.json())


app.use('/',apirouter)

const url = "mongodb+srv://Nitesh9609:Nitesh9609@cluster0.fnrsx.mongodb.net/To-do?retryWrites=true&w=majority"


mongoose.connect(url , {useNewUrlParser:true})
.then(()=>{
    console.log("database connected")
})
.catch(err => console.log(err))

app.listen(port, () =>{
    console.log(`database is running on http://localhost:${port}`)
})



