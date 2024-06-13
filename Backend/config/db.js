import mongoose from "mongoose";

const connectDB =async()=>{
 try {
  const connectionString = await mongoose.connect(`${process.env.MONGODB_CONNECTION_STRING}`)
  console.log(`Connected To MongoDB`)
 } catch (error) {
    console.log(`Error in Database Connection`)
 }
}

export default connectDB;