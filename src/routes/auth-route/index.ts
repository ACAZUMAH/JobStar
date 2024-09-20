import { Router } from 'express';
import { checkSchema } from 'express-validator';
import auth from '../../services/authservices';
import { validateSignup, validateLogin } from '../../middlewares/validators/validate';

const router = Router();


router.post('/register', checkSchema(validateSignup), auth.regiser);
router.post('/login',checkSchema(validateLogin), auth.login);

export default router;
