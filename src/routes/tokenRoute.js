import { Router } from 'express';
import TokenController from '../controllers/TokenController';

const router = Router();

router.post('/token', TokenController.store);

export default router;