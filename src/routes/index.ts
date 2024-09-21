import { Router } from 'express';
import authRoute from './auth-route';
import jobRoute from './jobs-route';
import auth from '../services/authservices/jwt';

const router = Router();

router.use('/api/v1/jobly', authRoute);  
router.use('/api/v1/jobly', jobRoute);

export default router;

