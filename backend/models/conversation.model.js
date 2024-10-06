import mongoose from "mongoose";



const conversationSchema=new mongoose.Schema({
 title:{
  type:String,
  required:true
 },
 members:{
  type:Array
 },
 lastMessage:{
  type:String
 },
 lastMessageId:{
  type:String
 }
},{timestamps:true});

export const Conversation=mongoose.model("Conversation",conversationSchema);