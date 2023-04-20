import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';
const router = Router();

router.post('/aluno', AlunoController.store);

export default router;