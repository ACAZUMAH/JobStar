import { Router } from 'express';
import job from '../../controllers';
import { validateJob } from '../../middlewares/validators/validate';
import { checkSchema } from 'express-validator';
import auth from '../../services/authservices/jwt'

const router = Router();

router.route('/jobs')
.get(job.getAllJobs);

router.route('/post')
.post(auth.authorize,checkSchema(validateJob),job.createJob)
.get(auth.authorize,job.getAllJobsByUser);


router.route('/jobs/:id')
.get(auth.authorize,job.getJob)
.put(auth.authorize,job.updateJob)
.delete(auth.authorize,job.deleteJob);

export default router;