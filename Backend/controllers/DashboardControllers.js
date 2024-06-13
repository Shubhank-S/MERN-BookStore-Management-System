import StudentModel from "../models/StudentModel.js"
import AdminModel from "../models/AdminModel.js"
import BookModel from '../models/BookModel.js'

export const GetAllDashboardDataController=async(req,resp)=>{
  try {
    const student = await StudentModel.countDocuments();
    const admin = await AdminModel.countDocuments();
    const book = await BookModel.countDocuments();
    resp.json({success:"true",message:"All Data fetched",student,admin,book}).status(200)
  } catch (error) {
    resp.json({ success: false, message: "Error in getting Dashboard Data", error }).status(400)
  }
}