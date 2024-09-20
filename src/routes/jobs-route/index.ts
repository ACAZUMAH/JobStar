import { Router } from 'express';
import job from '../../controllers';
import { authorize } from '../../services/authservices/jwt';
import { validateJob } from '../../middlewares/validators/validate';
import { checkSchema } from 'express-validator';

const router = Router();

router.route('/post')
.post(authorize,checkSchema(validateJob),job.createJob)
.get(job.getAllJobs);

router.route('/jobs/:id')
.get(job.getJob)
.put(job.updateJob)
.delete(job.deleteJob);

export default router;