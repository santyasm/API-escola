import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.post('/user', UserController.store);
router.put('/user', loginRequired, UserController.update);
router.delete('/user', loginRequired, UserController.delete);

export default router;
