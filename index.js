import express from "express";

const app = express()

app.get("/",(req,res)=>{
    res.send("hi")
})
app.get("/hi",(req,res)=>{
    res.send("hloo")
})


app.listen(8080,()=>{
    console.log("server is running on 8080")
})
