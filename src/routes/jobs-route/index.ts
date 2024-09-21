import { Router } from 'express';
import job from '../../controllers';
import validate from '../../middlewares/validators';
import auth from '../../services/authservices/jwt'
import { validateJob, ValidateUpdateJob } from '../../middlewares/validators/validate';

const router = Router();

router.route('/jobs')
.get(job.getAllJobs);

router.route('/jobs/post')
.post(auth.authorize,validate(validateJob),job.createJob);

router.route('/jobs/user')
.get(auth.authorize,job.getAllJobsByUser);

router.route('/jobs/user')
.get(auth.authorize,job.getJob);

router.route('/jobs/update')
.put(auth.authorize,validate(ValidateUpdateJob),job.updateJob);

router.route('/jobs/delete')
.delete(auth.authorize,job.deleteJob);

export default router;