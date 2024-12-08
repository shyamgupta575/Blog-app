import mongoose from "mongoose"
export const ConnectDB = async() =>{
    await mongoose.connect("mongodb+srv://Tashurawat:tashu2003@cluster0.vjwth.mongodb.net/blog-app")
    
    console.log("dbconnected");
}
