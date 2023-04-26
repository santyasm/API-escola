import { Router } from 'express';
const router = Router();
import FotoController from '../controllers/fotoController';

router.post('/foto',FotoController.store);

export default router;