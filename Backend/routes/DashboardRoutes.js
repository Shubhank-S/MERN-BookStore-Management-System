import express from 'express'
import { GetAllDashboardDataController } from '../controllers/DashboardControllers.js';

const router = express();

router.get('/alldata',GetAllDashboardDataController)

export default router;