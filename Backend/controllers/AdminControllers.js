import AdminModel from "../models/AdminModel.js"
import StudentModel from "../models/StudentModel.js";
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';

export const CreateAdminController = async (req, resp) => {
  try {
    const { username, password } = req.body;
    const adminCount = await AdminModel.countDocuments();
    if (adminCount) {
      const hashPassword = await bcrypt.hash(password, 10)
      const createAdmin = new AdminModel({
        username,
        password: hashPassword
      })
      const newAdmin = await createAdmin.save();
      resp.json({ success: true, message: "New Admin Created", newAdmin }).status(200)
    }
    else {
      resp.json({ success: false, message: "Admin account has been already Created" }).status(400)
    }
  } catch (error) {
    resp.json({ success: false, message: "Error while creating admin", error }).status(400)
  }
}

export const LoginAdminAndStudentController = async (req, resp) => {
  try {
    const { username, password, role } = req.body;
    if (role === "admin") {
      const admin = await AdminModel.findOne({ username })
      if (!admin) {
        return resp.json({ success: false, message: "Admin not Registered" }).status(405)
      }
      const validPassword = await bcrypt.compare(password, admin.password)
      if (!validPassword) {
        return resp.json({ success: false, message: "Incorrect Password" }).status(405)
      }
      const token = JWT.sign({ username: admin.username, role: 'admin' }, process.env.JWT_ADMIN_KEY)
      resp.cookie('token', token, { httpOnly: true, secure: true })
      return resp.json({ success: true, message: "Login as Admin", role: "admin" }).status(200)
      // return resp.json({ login: true, role: 'admin' }).status(200)
    } else if (role === "student") {
      try {
        const { rollNumber, username, grade, password, role } = req.body;
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
  } catch (error) {
    resp.json({ success: false, message: "Error in Admin Login", error }).status(400)
  }
}

export const LogoutController = async (req, resp) => {
  try {
    resp.clearCookie('token')
    return resp.json({ success: true, message: " Logout Successfully" })
  } catch (error) {
    resp.json({ success: false, message: "Error in Logout", error }).status(400)
  }
}