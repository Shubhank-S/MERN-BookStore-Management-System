import express from 'express'
import { CreateAdminController, LoginAdminAndStudentController, LogoutController } from '../controllers/AdminControllers.js';

const router = express.Router()

// POST || Create a New Admin

router.post('/', CreateAdminController)

// POST || Login a New Admin and Student

router.post('/login', LoginAdminAndStudentController)

// GET || LOGOUT

router.get('/logout', LogoutController)

export default router;