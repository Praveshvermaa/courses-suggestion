const {default:mongoose} = require("mongoose")

const usermodel = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    contact:String

})

export const userSchema = mongoose.models.users || mongoose.model("users",usermodel)
// export const foodSchema =  mongoose.models.foods || mongoose.model("foods",foodmodel)