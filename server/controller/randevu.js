import Post from "../models/RandevuMessage.js" 
 const createPost=async(req,res)=>{
   const post=req.body;
   const newPost=new Post(post);
   try {
    await newPost.save();
    res.status(200);
   } catch (error) {
    res.status(500).json({message:error.message})
   }
 }
 export {
    createPost
 }