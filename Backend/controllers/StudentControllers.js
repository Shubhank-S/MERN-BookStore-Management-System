import StudentModel from "../models/StudentModel.js"
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';

export const RegisterStudentController =async(req,resp)=>{
     try {
        const{rollNumber,username,grade,password} = req.body;
        const student =await StudentModel.findOne({username})
        if(student){
           return resp.json({ success: false, message: "student is already registered" }).status(401)
        }
        const hashPasssword =await bcrypt.hash(password,10)
        const createStudent = new StudentModel({
            rollNumber,username,grade,password:hashPasssword
        })
        const newStudent = await createStudent.save()
        resp.json({ success: true, message: "New Student Registered", newStudent }).status(200)
     } catch (error) {
        resp.json({ success: false, message: "Error in Student Register", error }).status(400)
     }
}

export const LoginStudentController = async (req, resp) => {
   try {
      const{rollNumber,username,grade,password,role} = req.body;
     if (role === "student") {
       const student = await StudentModel.findOne({ username })
       if (!student) {
         return resp.json({ success: false, message: "Student not Registered" }).status(405)
       }
       const validPassword = await bcrypt.compare(password, student.password)
       if (!validPassword) {
         return resp.json({ success: false, message: "Incorrect Password" }).status(405)
       }
       const token = JWT.sign({ username: student.username, role: 'student' }, process.env.JWT_STUDENT_KEY)
       resp.cookie('token', token, { httpOnly: true, secure: true })
       return resp.json({ success: true, message: "Login as Student", role: "student" }).status(200)
       // return resp.json({ login: true, role: 'admin' }).status(200)
     }
   } catch (error) {
     resp.json({ success: false, message: "Error in Student Login", error }).status(400)
   }
 }