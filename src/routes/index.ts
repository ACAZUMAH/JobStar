import { Router } from 'express';
import authRoute from './auth-route';
import jobRoute from './jobs-route';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the job portal API' });
});
router.use('/api', authRoute);  
router.use('/api', jobRoute);

export default router;

