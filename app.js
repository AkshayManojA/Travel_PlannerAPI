const express = require('express')
const mongoose = require('mongoose')
const travelPlanRouter =require('./routers/travelPlanRouter')
const app=express()
require ('dotenv').config()

const mongodburl = process.env.MONGODB_URL

app.get('/',(req,res)=>{
    res.send("Hello")
})
app.use(express.json())
app.use('/travelplans',travelPlanRouter)



async function main(){
    await mongoose.connect(mongodburl);
}

main()
.then(()=>console.log("Database Connnected"))
.catch(err => console.log(err));

const Traveldata = require('./models/TravelPlan')


const port = process.env.PORT

app.listen(port,()=>{
    console.log("Server started!")
})