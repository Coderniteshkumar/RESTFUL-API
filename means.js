const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    Ranking:{
        type:Number,
        required:true,
        unique:true
      },

      Name:{
        type:String,
        required:true,
        trim:true
      },

      dob:{
        type:String,
        required:true,
        trim:true
      },
      country:{
        type:String,
        required:true,
        trim:true
      },
      score:{
        type:Number,
        required:true,
        unique:true
      },
      event:{
        type:String,
        default:"100m"
      }
})

const user=mongoose.model("game",userSchema)
module.exports=user