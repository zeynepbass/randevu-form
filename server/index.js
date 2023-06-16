import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from "cors";
import Post from "./routes/randevu.js"
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use('/randevu',Post);
const MONGO_URI='mongodb+srv://randevu:12345678n@randevu.qfhgbsa.mongodb.net/?retryWrites=true&w=majority'
const PORT=process.env.PORT || 5045;
mongoose.connect(MONGO_URI)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server ${PORT} dinliyor.`)
    })
})
.catch(err=>{
console.log(err.message);
})