import { Router } from 'express';
import authRoute from './auth-route';
import jobRoute from './jobs-route';

const router = Router();

router.use('/api', authRoute);  
router.use('/api', jobRoute);

export default router;

