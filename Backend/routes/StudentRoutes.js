import express from 'express'
import { LoginStudentController, RegisterStudentController } from '../controllers/StudentControllers.js';
import verifyAdmin from '../middlewares/AuthMiddlewares.js';

const router = express.Router()

// POST || Register a Student

router.post('/register',verifyAdmin,RegisterStudentController)

// POST || Login a Student

router.post('/login',LoginStudentController)


export default router;