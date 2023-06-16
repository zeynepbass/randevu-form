import mongoose from 'mongoose'
const post=new mongoose.Schema({
    title:{type:String, required:true},
    message:{type:String, required:true},
    creator:{type:Number, required:true},
    checked:{type:String, required:true},
    
    startDate:{type:Date, required:true},

})
export default mongoose.model('Post',post)