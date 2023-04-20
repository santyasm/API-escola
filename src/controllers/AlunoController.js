import Aluno from '../models/Aluno';

export default class AlunoController {
	static async store(req, res) {
		try {
			const newAluno = await Aluno.create(req.body);

			return res.json(newAluno);
		} catch (error) {
			return res.status(400).json({errors: [error.message]});
		}
	}
}