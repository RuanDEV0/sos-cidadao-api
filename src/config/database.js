import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
async function connectToDatabase(){
  try{
    await mongoose.connect(process.env.MONGO_URI);
  }catch(error){
    console.error('Error in initialization moongodb', error);
  }
}

export default connectToDatabase;