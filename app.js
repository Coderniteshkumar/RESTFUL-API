const mongoose=require("mongoose")
const express=require("express")
const db=require('./db.js')
const User=require('./model/means.js')
const PORT=2200
const app=express()

app.use(express.json())

app.post('/mens',async(req,res)=>{
    try {
        const data=new User(req.body)
         console.log(req.body);
        await data.save()
        // res.send(data)
        res.send(data)
         res.status(200).json({
            message:"data store",
            data:data
         })
    } catch (error) {
        res.status(400).send({error:error.message})
    }
})

// all data find
app.get('/mens',async(req,res)=>{
   try {
    const code= await User.find({})
    // const code= await User.find({}).sort({" Ranking":1})
 // const code= await User.find({}).select({"Name":1,"_id":0})

    res.send(code)
   } catch (error) {
    res.send({error:error.message})
   }
})

//  single data find use by id
app.get('/mens/:id',async(req,res)=>{
    try {
        const{id}=req.params
     const read= await User.findById(id)
     res.send(read)
    } catch (error) {
     res.send({error:error.message})
    }
 })

 app.patch('/mens/:id',async(req,res)=>{
    try {
        const{id}=req.params
     const onedata= await User.findByIdAndUpdate(id,req.body,{
        new:true
     })

    res.send(onedata)
    } catch (error) {
     res.send({error:error.message})
    }
 })

 app.delete('/mens/:id',async(req,res)=>{
    try {
        const{id}=req.params
     const onedata= await User.findByIdAndDelete(id)

    res.send(onedata)
    } catch (error) {
     res.send({error:error.message})
    }
 })




app.listen(PORT,async(req,res)=>{
    console.log("servet is run on port no 2200");
})