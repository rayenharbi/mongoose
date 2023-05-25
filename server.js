const express=require('express') // import express
const app = express()
const PORT=5000
const mongoose=require('mongoose') // import mongoose

app.use(express.json())

mongoose.connect('mongodb+srv://<rayen12>:<rayen1>@cluster0.5lh1axy.mongodb.net/?retryWrites=true&w=majority')
.then(()=> console.log ('database connected'))
.catch ((err)=> {if (err) throw err })

app.use('/api',require("./routes/contactRoutes"))

app.listen(PORT,()=> console.log("listening on port", PORT))










app.listen(PORT,()=>console.log("listening on port",PORT))