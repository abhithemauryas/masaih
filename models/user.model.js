const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    email:{type:String,required:[true,"email not present"],unique:true,trim:true},
    password:{type:String,required:[true,"password not present"],trim:true},
    role: {
        type: String,
        required: true,
        default: "User",
        enum: ["User", "Admin"],
      }

},{
    versionKey:false,
    timestamps:true
})

const UserModel=mongoose.model("User",userSchema)

module.exports={UserModel}