import { Router } from 'express';
const router = Router();
import multer from 'multer';
import multerConfig from '../config/multer';
import FotoController from '../controllers/fotoController';

const upload = multer(multerConfig);

router.post('/foto', upload.single('foto'),FotoController.store);

export default router;