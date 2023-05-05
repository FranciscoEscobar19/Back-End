import mongoose from "mongoose";

const url = "mongodb+srv://veterinariap3:veterinariap3@cluster0.tkjajob.mongodb.net/documento"

mongoose
.connect(url,{useNewUrlParser:true})
.then(()=>{
    console.log("db conectada")
})
.catch((err)=>{
    console.log("error "+ err)
})