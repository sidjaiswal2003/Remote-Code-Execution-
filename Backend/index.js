import  express  from "express";
import dotenv from "dotenv"
import apiRoute from './route/api.js'
const app= express()
dotenv.config()

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.use('/api',apiRoute)
app.listen(process.env.PORT,console.log("server is on"))