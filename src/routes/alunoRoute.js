import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';
const router = Router();

router.post('/aluno', AlunoController.store);
router.get('/alunos', AlunoController.index);
router.get('/aluno/:id', AlunoController.show);
router.delete('/aluno/:id', AlunoController.delete);
router.put('/aluno/:id', AlunoController.update);

export default router;