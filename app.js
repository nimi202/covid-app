const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const covidRouter=require("./controllers/covidRouter")
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://nimi:nimi@cluster0.ek3ai0r.mongodb.net/covidDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)
app.use("/api/covid",covidRouter)
app.listen(3002,()=>{
    console.log("Server Running")
})