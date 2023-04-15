import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.post('/user', UserController.store);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.delete);

export default router;
