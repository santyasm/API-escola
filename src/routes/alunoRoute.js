import { Router } from 'express';
const router = Router();
import AlunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

router.get('/alunos', AlunoController.index);
router.get('/aluno/:id', AlunoController.show);
router.post('/aluno', loginRequired,  AlunoController.store);
router.delete('/aluno/:id', loginRequired, AlunoController.delete);
router.put('/aluno/:id', loginRequired, AlunoController.update);

export default router;