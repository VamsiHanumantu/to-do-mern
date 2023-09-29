import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1/todo");

const ListSchema = new mongoose.Schema({
    task: String
})

const ListModel = mongoose.model('lists',ListSchema);

app.get('/',(req,res)=>{
    ListModel.find({})
    .then((list)=>res.json(list))
    .catch((err)=>res.json(err))
})

app.post('/',(req,res)=>{
    ListModel.create(req.body)
    .then((list)=>res.json(list))
    .catch((err)=>res.json(err));
})

app.delete("/:id",(req,res)=>{
    const id = req.params.id;
    ListModel.findByIdAndDelete({_id:id})
    .then((list)=>res.json(list))
    .catch((err)=>res.json(err))
})

app.listen(3000,()=>{
    console.log("server is running")
})